require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.PASSWORD, {
  host : process.env.DB_HOST,
  // logging : false,
  dialect : process.env.DB_DIALECT,
  timezone: '+05:30'
})

async function checkConnection(){
  try{
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection();

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize

db.user         = require("./user")(sequelize, DataTypes)
db.group        = require("./group")(sequelize, DataTypes)
db.message      = require("./message")(sequelize, DataTypes)
db.groupmember  = require("./groupmember")(sequelize, DataTypes)
db.messagerecipient  = require("./messagerecipient")(sequelize, DataTypes)

// db.sequelize.sync({});
// db.sequelize.sync({force : true});
// db.sequelize.sync({force : false});
// db.sequelize.sync({alter : true});
// db.sequelize.sync({alter : false});

module.exports = db;