import { google } from "@ai-sdk/google";
import { streamText } from "ai";

import { type } from "arktype";
import { publicProcedure } from "./orpc";

export const aiRouter = {
  generate: publicProcedure
    .input(type({ content: "string" }))
    .handler(async function* ({ input }) {
      const stream = await streamText({
        model: google("gemini-1.5-flash"),
        prompt: input.content,
      });

      yield* stream.toDataStream();
    }),
};
