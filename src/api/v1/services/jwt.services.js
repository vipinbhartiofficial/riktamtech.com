const jwt = require('jsonwebtoken');

const JwtService = {
  createNewToken: (id) => jwt.sign(
    {
      sub: id
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '180d' }
  ),

  getJwtTokenWithUserData: async (user, deviceToken) => {
    const token = JwtService.createNewToken(user);
    return token;
  }
};

module.exports = JwtService;