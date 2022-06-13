"use strict";

import { functions } from "./src/main";
import { responseFactory } from "./src/utils/response.factory";

module.exports.parseArrivalTimes = async (event: any) => {
  const { stopID } = event.queryStringParameters;
  const response = await functions.parseArrivalTimes(stopID);
  //@ts-ignore
  return responseFactory(200, response);
};
