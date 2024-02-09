"use client";

import { EmptyBoards } from "./emptyBoards";
import { EmptyFavourites } from "./emptyFavourites";
import { EmptySearch } from "./emptySearch";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export function BoardList({ orgId, query }: BoardListProps) {
  const data = []; // TODO: fetch data

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <EmptyFavourites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
}
