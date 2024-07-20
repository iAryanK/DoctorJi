import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ChatAttributes } from "@/lib/types";

type Props = {
  chats: ChatAttributes[];
};

const Chats = ({ chats }: Props) => {
  if (chats.length) {
    return (
      <div className="flex flex-col h-[80vh] w-full mx-auto rounded-lg overflow-hidden">
        <div className="w-full flex-1 overflow-y-auto p-4 space-y-4">
          {chats.map((chat, index) => {
            return (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  chat.enum === "user" && "justify-end"
                }`}
              >
                <Card
                  className={`w-fit md:max-w-[70%] ${
                    chat.enum === "user" && "text-gray-400"
                  }`}
                >
                  {chat.enum === "user" ? (
                    <CardContent className="p-2">
                      <p>{chat.message?.toString()}</p>
                    </CardContent>
                  ) : (
                    <CardContent className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-xl">
                      {typeof chat.message === "object" &&
                        "medicine" in chat.message && (
                          <p>{chat.message.medicine}</p>
                        )}
                      {typeof chat.message === "object" &&
                        "description" in chat.message && (
                          <p className="pt-2 text-sm font-light italic">
                            {chat.message.description}
                          </p>
                        )}

                      {
                        // @ts-ignore
                        !chat.message?.medicine &&
                          // @ts-ignore
                          !chat.message?.description && (
                            <p className="text-muted-foreground text-sm font-extralight">
                              No medicine found
                            </p>
                          )
                      }
                    </CardContent>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full md:w-[40%] h-full flex items-center justify-center overflow-y-scroll">
        <Card className="rounded-tl-sm rounded-tr-3xl rounded-br-sm rounded-bl-3xl">
          <CardHeader>
            <CardTitle className="tracking-wide">
              👋 Hello! I&apos;m DoctorJi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              This website is only for reference purpose and is recommended to
              be used only by the doctors.
            </CardDescription>
          </CardContent>
          <CardFooter className="text-sm">
            ⚠️ If you&apos;re not someone who knows about medicines, you&apos;re
            adviced not to take any medicine without doctor&apos;s
            recommendation.
          </CardFooter>
        </Card>
      </div>
    );
  }
};

export default Chats;
