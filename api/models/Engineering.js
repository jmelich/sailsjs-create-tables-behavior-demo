/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
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
    comment: {
      type: 'string',
    },
    folders: {
      collection: 'Folder',
    },
  },
};
