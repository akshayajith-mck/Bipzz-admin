import { Injectable } from '@angular/core';
import * as json2csv from 'json2csv'; // convert json file to csv
import { saveAs } from 'file-saver';
@Injectable()
export class DownloadService {
  Json2csvParser = json2csv.Parser;
  constructor() { }
  public downloadFile(data: any, filename?: string) {
    const file = new Blob([this.convertToCSV(data)], { type: 'text/csv;charset=utf-8' });
    saveAs(file, `${filename}_${new Date()}.csv`);
  }

  public convertToCSV(objArray: any, fields?) {
    const json2csvParser = new this.Json2csvParser({ opts: fields });
    const csv = json2csvParser.parse(objArray);
    return csv;
  }
}
