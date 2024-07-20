"use client";

import Chats from "@/components/Chats";
import Message from "@/components/Message";
import Navbar from "@/components/shared/Navbar";
import { ChatAttributes } from "@/lib/types";
import { useState } from "react";

export default function Home() {
  const [chats, setChats] = useState<ChatAttributes[]>([]);

  return (
    <main className="flex h-[90vh] sm:h-[100vh] flex-col items-center justify-between">
      <Navbar />
      <Chats chats={chats} />
      <Message chats={chats} setChats={setChats} />
    </main>
  );
}
