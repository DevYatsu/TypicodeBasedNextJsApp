import { User } from "@/app/types/User";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = { email: string; password: string };

export async function POST(req: NextRequest) {
  const {}: RequestBody = await req.json();

  //logout user if connected

  return NextResponse.json({
    status: 200,
    message: "OK",
    ok: true,
    displayMessage: "All good.",
  });
}
