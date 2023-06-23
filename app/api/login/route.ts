import { User } from "@/app/types/User";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = { email: string; password: string };

export async function POST(req: NextRequest) {
  const { email, password }: RequestBody = await req.json();

    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (users) => users.json()
    );
    const registeredEmail: User[] | [] = data.filter(
      (user: User) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (registeredEmail.length === 0) {
      return NextResponse.json({
        status: 400,
        message: "User Not Found",
        ok: false,
        displayMessage: "These informations do not belong to any of our users.",
      });
    }

    if (registeredEmail[0].name.replace(" ", "") !== password) {
      return NextResponse.json({
        status: 400,
        message: "User Not Found",
        ok: false,
        displayMessage: "Check your email or password. Nothing found. ",
      });
    }

  return NextResponse.json({
    status: 200,
    message: "OK",
    ok: true,
    displayMessage: "All good.",
  });
}
