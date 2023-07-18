import { User } from "./users";

export interface Post {
    id: string;
    user?: User;
    userId: number;
    title: string;
    body: string;
  }