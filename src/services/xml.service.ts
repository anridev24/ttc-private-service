import { XMLParser } from "fast-xml-parser";

class XMLService {
  XMLParser: XMLParser;
  constructor() {
    this.XMLParser = new XMLParser();
  }

  parseXML(xml: string): any {
    return this.XMLParser.parse(xml);
  }
}

export default new XMLService();
