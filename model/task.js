import sequelize from "../database/sequelize.js";
import { DataTypes } from "sequelize";
import User from './user.js'

const Task = sequelize.define(
    'Task',
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull:false
        // allowNull defaults to true
      },
      descricao: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      data: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        // allowNull defaults to true
      },
      tipo: {
        type: DataTypes.ENUM('Pessoal', 'Profissional'),
        allowNull: false
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    },
  );
/* 
  User.hasMany(Task, {
    foreignKey: 'userId', 
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }); */

  Task.sync({ force: true});

  export default Task;