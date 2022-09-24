"use strict";
var common_vendor = require("../common/vendor.js");
const db = common_vendor.rn.database();
const request = {
  async setThreshold(name, newdata) {
    try {
      const res = await db.collection("resultSet").where({
        name
      }).update({
        threshold: newdata
      });
      return res;
    } catch (e) {
      return {
        errCode: e.errCode,
        errMsg: e.errMsg,
        requestId: e.requestId
      };
    }
  },
  async getThreshold() {
    try {
      const res = await db.collection("resultSet").get();
      return res;
    } catch (e) {
      return {
        errCode: e.errCode,
        errMsg: e.errMsg,
        requestId: e.requestId
      };
    }
  }
};
exports.request = request;
