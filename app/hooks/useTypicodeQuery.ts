import { useQuery } from "@tanstack/react-query";

export default function useTypicodeQuery(key: string | string[], path: string) {
  return useQuery({
    queryKey: typeof key === "string" ? [key] : key,
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com${path}`).then((res) =>
        res.json()
      ),
  });
}
