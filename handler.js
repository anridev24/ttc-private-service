"use strict";

const { functions } = require("./dist/main");
const { responseFactory } = require("./dist/utils/response.factory");

module.exports.parseArrivalTimes = async (event) => {
  const { stopID } = event.queryStringParameters;
  const response = await functions.parseArrivalTimes(stopID);

  return responseFactory(200, response);
};
