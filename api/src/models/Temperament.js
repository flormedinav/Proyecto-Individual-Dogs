const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "temperament",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false, //Para que no me cree por defecto las columnas que hace postgres.
    }
  );
};
