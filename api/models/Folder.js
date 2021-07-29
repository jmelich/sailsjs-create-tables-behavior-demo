/**
 * File.js
 *
 * @description :: Defines a Model for File managing.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  primaryKey: 'id',

  attributes: {
    id: {
      type: 'number',
      unique: true,
      autoIncrement: true
    },
    userID: {
      type: 'string'
    },
    groupID: {
      type: 'string'
    },
    name: {
      type: 'string',
      defaultsTo: 'New Folder'
    },
  },
};
