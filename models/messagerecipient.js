module.exports = (sequelize, DataTypes) => {
  const MessageRecipient = sequelize.define("MessageRecipient", {
    message_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_like: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{
    tableName : "message_recipients",
    timestamps: true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  })
  return MessageRecipient
}