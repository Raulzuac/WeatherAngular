export interface Feature {
  type:                 string;
  properties:           Properties;
  geometry:             Geometry;
  bbox:                 number[];
  center:               number[];
  place_name:           string;
  place_type:           string[];
  relevance:            number;
  context:              Context[];
  id:                   string;
  text:                 string;
  matching_text?:       string;
  matching_place_name?: string;
}

export interface Context {
  ref:          string;
  country_code: string;
  kind:         string;
  id:           string;
  text:         string;
  wikidata?:    string;
}



export interface Geometry {
  type:        string;
  coordinates: number[];
}

export interface Properties {
  ref:          string;
  country_code: string;
  kind:         string;
  wikidata:     string;
}
