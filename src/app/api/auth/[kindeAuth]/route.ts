import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: any, { params }: { params: any }) {
  const endpoint = params.kindeAuth;
  return handleAuth(request, endpoint);
}
