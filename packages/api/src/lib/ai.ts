import { type } from "arktype";

// --- CoreMessage ArkType Definitions ---

// Part Types
const textPartType = type({
  type: "'text'",
  text: "string",
});

const imagePartType = type({
  type: "'image'",
  image: "string", // URL or base64 encoded data
});

const toolCallPartType = type({
  type: "'tool-call'",
  toolCallId: "string",
  toolName: "string",
  args: "string", // JSON string
});

const toolResultPartType = type({
  type: "'tool-result'",
  toolCallId: "string",
  toolName: "string",
  result: "unknown", // any JSON serializable value
});

// Assistant API Tool Call Type (for the `tool_calls` array)
const assistantApiToolCallFunctionType = type({
  name: "string",
  arguments: "string", // JSON string
});

const assistantApiToolCallType = type({
  id: "string",
  type: "'function'",
  function: assistantApiToolCallFunctionType,
});

// Message Types
const systemMessageType = type({
  role: "'system'",
  content: "string",
  "experimental_data?": "unknown",
});

const userMessageType = type({
  role: "'user'",
  content: ["string", textPartType.or(imagePartType).array()],
  "experimental_data?": "unknown",
});

const assistantMessageType = type({
  role: "'assistant'",
  content: ["string", textPartType.or(toolCallPartType).array()],
  "tool_calls?": assistantApiToolCallType.array(),
  "experimental_data?": "unknown",
});

const toolMessageType = type({
  role: "'tool'",
  content: ["string", toolResultPartType.array()],
  tool_call_id: "string",
  "experimental_data?": "unknown",
});

const coreMessageType = type([
  systemMessageType,
  userMessageType,
  assistantMessageType,
  toolMessageType,
]);

// Schema for the chat endpoint input, using CoreMessage
export const chatMessageType = type({
  id: "string",
  messages: coreMessageType.array(),
});
