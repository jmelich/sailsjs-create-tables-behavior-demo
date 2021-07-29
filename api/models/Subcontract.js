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
    address: {
      type: 'string'
    },
    lat: {
      type: 'number'
    },
    lon: {
      type: 'number'
    },
    roofType: {
      type: 'string'
    },
    plantPower: {
      type: 'number'
    },
    comment: {
      type: 'string',
    },
    folders: {
      collection: 'Folder',
    },
  },
};
