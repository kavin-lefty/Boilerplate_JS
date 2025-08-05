import { FetchUsers, LoginUser } from "@/services/common";
import { queryOptions } from "@tanstack/react-query";

export function SampleQueryFetch() {
  return queryOptions({
    queryKey: ["sample_query_key"],
    queryFn: LoginUser,
  });
}

export function SampleExportedTypesUsed() {
  return queryOptions({
    queryKey: ["exported_type"],
    queryFn: FetchUsers,
  });
}
