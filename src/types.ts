import {inputSchema} from "./zodSchema"
import {z} from "zod"

export type Input = z.infer<typeof inputSchema>

export enum ElectionTypes {
    Proposal = "proposal",
    President = "president",
    Counselor = "council",
}
