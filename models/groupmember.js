module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define("GroupMember", {
    group_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    roles: {
      type: DataTypes.STRING
    },
    created_by: {
      type: DataTypes.INTEGER
    },
    updated_by: {
      type: DataTypes.INTEGER
    }
  },{
    tableName : "group_members",
    timestamps: true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  })
  return GroupMember
}