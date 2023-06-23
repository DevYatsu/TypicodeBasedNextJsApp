import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  comment: string;
  postId: string;
  responseToPostUser: string;
};

export async function POST(req: NextRequest) {
  const { comment, postId, responseToPostUser }: RequestBody = await req.json();

  //check if user is logged in
  //if yes store comment to db

  return NextResponse.json({
    status: 200,
    message: "OK",
    ok: true,
    displayMessage: "All good.",
  });
}
