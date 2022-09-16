"use strict";
var common_vendor = require("../common/vendor.js");
const db = common_vendor.rn.database();
const request = {
  async setThreshold(name, type) {
    try {
      db.collection("resultSet").where({
        name
      }).update({});
    } catch (e) {
      return `${e.codfe}: ${e.message}`;
    }
  },
  async getThreshold() {
    try {
      const dataSet = await db.collection("resultSet").get();
      return dataSet;
    } catch (e) {
      return `${e.codfe}: ${e.message}`;
    }
  }
};
exports.request = request;
