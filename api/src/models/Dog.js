const { DataTypes } = require("sequelize");

const imageRamdon =
  "https://i.pinimg.com/564x/f2/a9/31/f2a9310be7d13bb02ffbb0bf3445a8b4.jpg";

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: imageRamdon,
      },
      heightMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      heightMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weightMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weightMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lifeSpan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //Esto me permite buscar más fácil a todos los que se crearon
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false, //Para que no me cree por defecto las columnas que hace postgres.
    }
  );
};
