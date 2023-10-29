import {z} from "zod"
import {ElectionTypes} from "./types";

export const inputSchema = z.object({
    name: z.string().optional(),
})

export const outputSchema = z.object({
    greetings: z.string(),
})

export const electionTypeSchema = z.nativeEnum(ElectionTypes)
