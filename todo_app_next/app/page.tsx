import SignUp from "@/components/signup";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex w-full justify-center">
      {session?.user?.email ? (
        <div className="flex w-full justify-center">
          <div>xd</div>
        </div>
      ): <SignUp/>}
    </div>
  );
}
