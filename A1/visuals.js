import {vl} from "@vega/vega-lite-api-v5"

const data = "data/drugs_OD.csv";
vl.mark().data(data)