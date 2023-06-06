import type { JsonObject } from "@bufbuild/protobuf";
import * as model from "../model/index.js";
import { aif as dumpAif } from "./aif.js";
import { protobuf as dumpProtobuf } from "./protobuf.js";

export function json(
  graph: model.GraphInterface,
  format: "aif" | "arguebuf"
): JsonObject {
  if (format === "aif") {
    return dumpAif(graph) as unknown as JsonObject;
  }

  return dumpProtobuf(graph).toJson() as JsonObject;
}
