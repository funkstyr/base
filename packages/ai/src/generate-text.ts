import { google } from "@ai-sdk/google";
import type { GoogleGenerativeAILanguageModel } from "@ai-sdk/google/internal";
import { type CoreMessage, generateText } from "ai";

export const generateTextHandler = async (
  messages: CoreMessage[],
  model?: GoogleGenerativeAILanguageModel["modelId"],
) => {
  const result = await generateText({
    model: google(model ?? "gemini-1.5-flash"),
    messages,
  });

  return result;
};
