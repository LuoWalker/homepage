"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createMessage(formData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await prisma.message.create({
    data: {
      message: formData.get("message"),
      userId: user.id,
      userFirstname: user.firstName,
      userImg: user.imageUrl,
    },
  });

  revalidatePath("/message");
}
