module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    group_id: {
      type: DataTypes.INTEGER
    },
    sender_id: {
      type: DataTypes.INTEGER
    },
    messages: {
      type: DataTypes.STRING
    }
  },{
    tableName : "messages",
    timestamps: true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  })
  return Message
}