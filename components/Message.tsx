"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { SendHorizonal } from "lucide-react";
import { ChatAttributes } from "@/lib/types";
import { HomeopathData } from "@/data/homoeopath";

type Props = {
  chats: ChatAttributes[];
  setChats: React.Dispatch<React.SetStateAction<ChatAttributes[]>>;
};

function Message({ chats, setChats }: Props) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message != "") {
      setChats((prevChats) => [
        ...prevChats,
        { enum: "user", message: message },
      ]);

      let searchValue = message;
      setMessage("");

      const regex = new RegExp(searchValue, "i");
      let result = HomeopathData.filter((data) => {
        return (
          regex.test(([data.title] || []).join(" ")) ||
          regex.test((data.detail || []).join(" "))
        );
      });

      if (result.length) {
        setChats((prevChats) => [
          ...prevChats,
          { enum: "doctor", message: result[0].title },
        ]);
      } else {
        setChats((prevChats) => [
          ...prevChats,
          {
            enum: "doctor",
            message:
              "Sorry, I could not find any medicine or symptom for this.",
          },
        ]);
      }
      console.log(chats);
    }
  };

  return (
    <div className="w-full pb-5">
      <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-between gap-2 px-2">
        <Input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="Enter medicine, symptom, etc."
          className="bg-transparent border-none"
        />
        <SendHorizonal
          onClick={handleSubmit}
          fill="#000"
          className="-rotate-90 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Message;
