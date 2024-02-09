import { useMutation } from "convex/react";
import type {
  DefaultFunctionArgs,
  FunctionReference,
  OptionalRestArgs,
} from "convex/server";
import { useState } from "react";

export const useApiMutation = <
  Args extends DefaultFunctionArgs = any,
  ReturnType = any
>(
  mutationFn: FunctionReference<"mutation", "public", Args, ReturnType>
) => {
  const [isLoading, setIsLoading] = useState(false);

  const apiMutation = useMutation(mutationFn);

  const mutate = (
    ...payload: OptionalRestArgs<
      FunctionReference<"mutation", "public", Args, ReturnType>
    >
  ) => {
    setIsLoading(true);
    return apiMutation(...payload)
      .finally(() => setIsLoading(false))
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    isLoading,
  };
};
