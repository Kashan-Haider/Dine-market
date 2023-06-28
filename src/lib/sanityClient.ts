import { createClient } from "next-sanity";
import { projectId , useCdn } from "../../sanity/env";
export const client = createClient({
    apiVersion:"v2023-06-17",
    dataset:"production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn : true,
    token: process.env.SANITY_ACCESS_TOKEN
})
