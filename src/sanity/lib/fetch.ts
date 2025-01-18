import { createClient } from "next-sanity";

const client = createClient({
  projectId: "fwbzfep0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-10",
});

export async function sanityFetch({ query, params = {}}: { query: string ,params?: any }){
  return await client.fetch(query, params)
}
