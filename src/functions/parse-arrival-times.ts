import ttcService from "../services/ttc.service";
import xmlService from "../services/xml.service";
import ArrivalTimesUnparsed from "../types/arrival-times-unparsed.type";

async function parseArrivalTimes(stopID: string) {
  console.log(stopID);

  const XMLData = await ttcService.getArrivalTimes(stopID);

  const data: ArrivalTimesUnparsed = xmlService.parseXML(XMLData);

  return data.ArrivalTimes.ArrivalTime.map((arrivalTime) => ({
    arrivalTime: arrivalTime.ArrivalTime,
    destinationStopName: arrivalTime.DestinationStopName,
    routeNumber: arrivalTime.RouteNumber,
  }));
}

export default parseArrivalTimes;
