const MessageService = require("../services/message.services");
const AuthHelper = require("../helpers/auth.helper");

module.exports = {
  createGroup : async (req, res) => {
    try{
      let userId = req.userInfo.id.dataValues.id;
      
      let data  = await MessageService.createGroup(req.body, userId);
      return res.status(200).json({
          "message": "Group has been created successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
  updateGroup : async (req, res) => {
    try{
      let groupId = req.params.id;
      let userId  = req.userInfo.id.dataValues.id;

      let data  = await MessageService.updateMember(req.body, userId, groupId);
      return res.status(200).json({
          "message": "Group has been updated successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  
  groupChatting : async (req, res) => {
    try{
      let userId  = req.userInfo.id.dataValues.id;
      let data    = await MessageService.groupChatting(req.body, userId);
      
      return res.status(200).json({
          "message": "Message has been sent successfully",
          "success": true,
          "data": data
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}