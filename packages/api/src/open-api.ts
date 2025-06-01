import { experimental_ArkTypeToJsonSchemaConverter as ArkTypeToJsonSchemaConverter } from "@orpc/arktype";
import { OpenAPIGenerator } from "@orpc/openapi";

import { appRouter } from ".";

const openAPIGenerator = new OpenAPIGenerator({
  schemaConverters: [new ArkTypeToJsonSchemaConverter()],
});

export const openApiSpec = await openAPIGenerator.generate(appRouter, {
  info: {
    title: "Base App",
    version: "0.0.0",
  },
  servers: [{ url: "http://localhost:3000/rpc" }],
});
