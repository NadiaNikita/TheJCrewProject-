module.exports = function(sequelize, DataTypes) {
    var wNames = sequelize.define("wNames", {
      wine_id: DataTypes.INTEGER, 
      wine_name: DataTypes.STRING
    });
  
    wNames.sync();
    return wNames;
  };