const jwt = require('jsonwebtoken');
const Redis = require('../../../../utils/redis');
module.exports = {
  
  moveTokenToHeaders: async (req, res, next) => {
    try {
      const { token } = req.query;
      req.headers.authorization = `Bearer ${token}`;
      delete req.query.token;
      return next();
    } catch (error) {
      return res.status(401).json(Response.sendError(
        "You are unauthorized",
        {},
        401
      ));
    }
  },
  
  checkAuth: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ').pop().trim();
      const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
      
      const keyName = `user_token_${result.sub.dataValues.id}`;
      const getRedisJwtToken = await Redis.get(keyName);
      const redisTokenParse = JSON.parse(getRedisJwtToken);
      const redisToken = redisTokenParse.token;
      
      if(redisToken != token){
        return res.status(401).json({
          "message" : "You are unauthorized",
          "success" : false
        });
      }
      
      req.userInfo = { id: result.sub };
      return next();
    } catch (error) {
      return res.status(401).json({
        "message" : "You are unauthorized",
        "success" : false
      });
    }
  },
};
