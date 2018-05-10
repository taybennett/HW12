
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
      dog_name: {
        type: DataTypes.STRING,
      },
      bought: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
  });
  return Dog;
};