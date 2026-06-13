import type { PostKeys } from "./keys";

export interface IPost {
    [PostKeys.id]: string,
    [PostKeys.label]: string,
    [PostKeys.content]: string,
    [PostKeys.created_at]: string,
}