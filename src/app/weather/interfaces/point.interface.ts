// To parse this data:
//
//   import { Convert, Point } from "./file";
//
//   const point = Convert.toPoint(json);

import { Feature } from "./feature.interface";

export interface Point {
  type:        string;
  features:    Feature[];
  query:       string[];
  attribution: string;
}


// Converts JSON strings to/from your types
export class Convert {
  public static toPoint(json: string): Point {
      return JSON.parse(json);
  }

  public static pointToJson(value: Point): string {
      return JSON.stringify(value);
  }
}
