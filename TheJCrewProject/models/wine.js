module.exports = function(sequelize, DataTypes) {
var Wines = sequelize.define("Wines", {
    wine_id: DataTypes.INTEGER, 
	wine_class: DataTypes.STRING
  });

   Wines.sync();
  return Wines;
};
