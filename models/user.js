module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING
    },
    mobile_no: {
      type: DataTypes.BIGINT,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    roles: {
      type: DataTypes.STRING
    }
  },{
    tableName : "users",
    timestamps: true,
    createdAt : "created_at",
    updatedAt : "updated_at"
  })
  return User
}