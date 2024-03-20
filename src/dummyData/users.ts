import { User } from "@/types/firestore/user.types";

export const users: User[] = [
  {
    name: "Kado Hiroki",
    lab: "建築環境学研究室",
    coverImageUrl: "https://example.com/cover.jpg",
    iconImageUrl: "https://example.com/icon.jpg",
    detail: "Hello, I'm Kado Hiroki.",
    workIds: ["work1", "work2"],
  },
  {
    name: "Hidano Ryotaro",
    lab: "建築環境学研究室",
    coverImageUrl: "https://example.com/cover.jpg",
    iconImageUrl: "https://example.com/icon.jpg",
    detail: "Hello, I'm Hidano Ryotaro.",
    workIds: [],
  },
  {
    name: "Konishi Sota",
    lab: "建築環境学研究室",
    coverImageUrl: "https://example.com/cover.jpg",
    iconImageUrl: "https://example.com/icon.jpg",
    detail: "Hello, I'm Konishi Sota.",
    workIds: [],
  },
  {
    name: "Sakane Tubasa",
    lab: "建築環境学研究室",
    coverImageUrl: "https://example.com/cover.jpg",
    iconImageUrl: "https://example.com/icon.jpg",
    detail: "Hello, I'm Sakane Tubasa.",
    workIds: [],
  },
];
