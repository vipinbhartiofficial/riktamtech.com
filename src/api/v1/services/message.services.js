const { Op } = require('sequelize');

const db = require("../../../../models")

const Group         = db.group
const Message       = db.message
const GroupMember   = db.groupmember

const MessageService = {    
    createGroup : async (data, userId) => {
        let groupInfo = await Group.create({
            name : data.name,
            created_by : userId,
            updated_by : userId
        });
        
        let groupUser = data.members;
        
        let groupMember = [{
            user_id : userId,
            group_id : groupInfo.id,
            roles : "ADMIN",
            created_by : userId,
            updated_by : userId
        }]
        
        groupUser.map((vl) => {
            groupMember.push({
                user_id : vl,
                group_id : groupInfo.id,
                roles : "NORMAL",
                created_by : userId,
                updated_by : userId
            })
        })
        
        return await GroupMember.bulkCreate(groupMember);
    },
    
    updateMember : async (data, userId, groupId) => {
        await Group.update({
                name : data.name,
                updated_by : userId
            },
            {
                where : {
                    id : groupId
                }
            }
        );
        
        await GroupMember.destroy({
            where : {
                group_id : groupId,
                user_id : {
                    [Op.notIn] : data.members
                }
            }
        })
        
        const existingMembers = await GroupMember.findAll({
            attributes : ["user_id"],
            where : {
                group_id : groupId,
                user_id : {
                    [Op.in] : data.members
                }
            }
        })
        
        const existingMemberIds = existingMembers.map(member => member.user_id);
        
        const newMembers = data.members.filter(member => !existingMemberIds.includes(member));

        const newMemberRecords = newMembers.map(member => ({
            user_id: member,
            group_id: groupId,
            roles: "NORMAL",
            created_by: userId,
            updated_by: userId
        }));
        
        return await GroupMember.bulkCreate(newMemberRecords);
    },
    
    groupChatting : async (io, data, userId) => {
        let messagesObj = {
            group_id : data.group_id,
            messages : data.messages,
            sender_id : userId
        }

        let savedMessages = await Message.create(messagesObj);
        
        return savedMessages
    }
}

module.exports = MessageService;