import { AuthOptions } from "@/app/auth/AuthOptions";
import nextAuth from "next-auth";

const handler = nextAuth(AuthOptions);

export { handler as GET, handler as POST };
