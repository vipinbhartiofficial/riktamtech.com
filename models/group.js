module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define("Group", {
    name: {
      type: DataTypes.STRING
    },
    created_by: {
      type: DataTypes.INTEGER
    },
    updated_by: {
      type: DataTypes.INTEGER
    }
  },{
    tableName : "groups",
    timestamps: true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  })
  return Group
}