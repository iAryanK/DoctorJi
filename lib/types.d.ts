type MessageAttributes = {
  medicine: string;
  description: string;
};

export type ChatAttributes = {
  enum: "user" | "doctor";
  message: MessageAttributes | string | undefined;
};
