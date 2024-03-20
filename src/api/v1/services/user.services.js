const { Op, Sequelize, DataTypes } = require("sequelize")
const db = require("../../../../models")

const User = db.user

const UserService = {
    findByUserName: async (user_name) => {
        return User.findOne({
            where: {
                ad_mobile : user_name
            }
        })
    },

    findByUserEmail: async (email) => {
        return User.findOne({
            where: {
                email : email
            }
        })
    },
    
    getInfo : async (req, res) => {
        let out = await User.findOne({ 
            where : { 
            id : req.params.id
            }
        });
        res.status(200).json(out)
    },
    
    createUser : async (data) => {
        return await User.create(data);
    },
    
    updateUser : async (data, id) => {
        return await User.update(data, {
          where : {
            id : id
          }
        });
    },

    searchUser : async (data) => {
        let search      = data.search;
        if(search.length > 1){
            return await User.findAll({
                where  : {
                    [Op.or] : [
                        {
                            name : {
                                [Op.like] : "%" + data.search + "%"
                            }
                        },
                        {
                            email : {
                                [Op.like] : "%" + data.search + "%"
                            }
                        },
                        {
                            mobile_no : {
                                [Op.like] : "%" + data.search + "%"
                            }
                        }
                    ]
                }
            });
        }
        else
        {
            return await User.findAll({})
        }
    },
    
    deleteUser : async (id) => {
        return await User.destroy({
          where : {
            id : id
          }
        });
    }
}

module.exports = UserService;