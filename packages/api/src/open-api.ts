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

export const openApiHtml = (url: string) => `
    <!doctype html>
    <html>
      <head>
        <title>Base Api Docs</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="https://orpc.unnoq.com/icon.svg" />
      </head>
      <body>
        <div id="app"></div>

        <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
        <script>
          Scalar.createApiReference('#app', {
            url: '${url}',
            authentication: {
              securitySchemes: {
                bearerAuth: {
                  token: 'default-token',
                },
              },
            },
          })
        </script>
      </body>
    </html>
  `;
