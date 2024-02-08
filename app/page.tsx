import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>You are logged in</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
