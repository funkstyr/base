import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";
import { type } from "arktype";

import { chatMessageType } from "./lib/ai";
import { publicProcedure } from "./orpc";

// TODO: figure out why this is causing BAD_REQUEST, domain must be an object(was undefined)
export const aiRouter = {
  generate: publicProcedure
    .route({
      summary: "Generate prompt",
      description: "Streams text from a prompt response from a model",
      tags: ["ai"],
    })
    .input(type({ content: "string" }))
    .handler(async function* ({ input }) {
      const stream = await streamText({
        model: google("gemini-1.5-flash"),
        prompt: input.content,
      });

      yield* stream.toDataStream();
    }),

  chat: publicProcedure
    .route({
      summary: "Chat",
      description: "Streams chat from model",
      tags: ["ai"],
    })
    .input(chatMessageType)
    .handler(async function* ({ input }) {
      const stream = streamText({
        model: google("gemini-1.5-flash"),
        messages: input.messages as unknown as CoreMessage[], // Cast if necessary, ArkType ensures structure
      });

      yield* stream.toDataStream();
    }),
};
