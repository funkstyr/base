import { google } from "@ai-sdk/google";
import type { GoogleGenerativeAILanguageModel } from "@ai-sdk/google/internal";
import { type CoreMessage, streamText } from "ai";

export const streamTextHandler = (
  messages: CoreMessage[],
  model?: GoogleGenerativeAILanguageModel["modelId"],
) => {
  const stream = streamText({
    model: google(model ?? "gemini-1.5-flash"),
    messages,
  });

  return stream;
};
