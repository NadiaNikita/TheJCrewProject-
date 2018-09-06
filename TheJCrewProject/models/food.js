
module.exports = function(sequelize, DataTypes) {
    var Foods = sequelize.define("Foods", {
      food_id: DataTypes.INTEGER, 
      food_name: DataTypes.STRING
    });
  
    Foods.sync();
    return Foods;
  };
  
