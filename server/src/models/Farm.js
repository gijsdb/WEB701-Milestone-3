module.exports = (sequelize, DataTypes) => {
const Farm = sequelize.define('Farm', {
    farmId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    farmName: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    farmWebsite: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
})  
  return Farm
}
