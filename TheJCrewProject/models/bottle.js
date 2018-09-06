module.exports = function(sequelize, DataTypes) {
    var pairings = sequelize.define("pairings", {
      wine_id: DataTypes.INTEGER, 
      wine_name: DataTypes.STRING,
      wine_bottle: DataTypes.STRING
    });
  
    //syncs with DB
    pairings.sync();
    return pairings;
  };