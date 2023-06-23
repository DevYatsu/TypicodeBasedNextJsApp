import { NextRequest, NextResponse } from "next/server";

type RequestBody = { username: string; email: string; password: string };

export async function POST(req: NextRequest) {
  const { email, password, username }: RequestBody = await req.json();

  //add user to db

  return NextResponse.json({
    status: 200,
    message: "OK",
    ok: true,
    displayMessage: "All good.",
  });
}
