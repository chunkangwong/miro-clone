"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyOrg";

export default function DashboardPage() {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <p>Board List</p>}
    </div>
  );
}
