const UserService = require("../services/user.services");
const JwtService = require("../services/jwt.services");
const AuthHelper = require("../helpers/auth.helper");
const Redis = require("../../../../utils/redis");

module.exports = {
  loginUser : async (req, res) => {
    try{
      let info = await UserService.findByUserEmail(req.body.user);
      if(!info)
      {
          return res.status(200).json({
            "message": "User Not Found",
            "data": {},
            "success": false
          });
      }
      
      let password = req.body.pass;
      
      if(password == info.password)
      {
        let token = await JwtService.getJwtTokenWithUserData(
          await AuthHelper.getFilteredUserDetails(info), null
        );
        
        const keyNameWeb = `user_token_${info.id}`;
        
        const dataStorableWeb = {
          user_id: info.id,
          token: token
        }
        
        const storeTokenWeb = await Redis.set(keyNameWeb, dataStorableWeb)
        
        let data = {id : info.id, name : info.name, email : info.email, mobile_no : info.mobile_no, roles : info.roles, token : token}
        
        return res.status(200).json({
            "message": "You have successfully logged in",
            "success": true,
            "data": data
        });
      }
      else
      {
        return res.status(404).json({
            "message": "Worng Password",
            "success": false,
            "data": ''
        });
      }
    } catch (error) {
        return res.status(500).json(error);
    }
  },
  
  createUser : async (req, res) => {
    try{
      let data = await UserService.createUser(req.body);
      return res.status(200).json({
          "message": "User has been created successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
  updateUser : async (req, res) => {
    try{
      let data = await UserService.updateUser(req.body, req.params.id);
      return res.status(200).json({
          "message": "User has been updated successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
  getListing : async (req, res) => {
    try{
      let data = await UserService.searchUser(req.body);
      return res.status(200).json({
          "message": "User list has been successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
  deleteUser : async (req, res) => {
    try{
      let data = await UserService.deleteUser(req.params.id);
      return res.status(200).json({
          "message": "User has been deleted successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}