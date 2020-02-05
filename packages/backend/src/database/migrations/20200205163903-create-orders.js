"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "recipients",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      deliveryman_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "deliveryman",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      signature_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "files",
          key: "id"
        },
        onDelete: "SET NULL"
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false
      },
      canceled_at: {
        type: Sequelize.DATE
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders");
  }
};
