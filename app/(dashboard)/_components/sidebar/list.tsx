"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export function List() {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (userMemberships.data?.length === 0) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => {
        return (
          <Item
            id={membership.organization.id}
            key={membership.organization.id}
            imageUrl={membership.organization.imageUrl}
            name={membership.organization.name}
          />
        );
      })}
    </ul>
  );
}
