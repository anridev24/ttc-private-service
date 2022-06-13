import fetch from "node-fetch";

import config from "../config";

class TTCService {
  baseURL: string;
  constructor() {
    this.baseURL = config.TTCBaseURL;
  }

  async getArrivalTimes(stopID: string): Promise<string> {
    const response = await fetch(`${this.baseURL}/stopArrivalTimes?stopId=${stopID}`, {
      headers: { accept: "application/xml" },
    });
    return await response.text();
  }
}

export default new TTCService();
