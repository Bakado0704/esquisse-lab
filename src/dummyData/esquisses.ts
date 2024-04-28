import { Esquisse } from "@/types/firestore/esquisse.types";

export const esquisses: Esquisse[] = [
  {
    id: "esquisse1",
    workId: "work1",
    createdAt: new Date("2021-01-01T00:00:00Z"),
    imageUrls: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    subject: "議題1",
    description:
      "こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは",
    chatIds: ["chat1", "chat2"],
  },
  {
    id: "esquisse2",
    workId: "work1",
    createdAt: new Date("2021-01-02T00:00:00Z"),
    imageUrls: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    subject: "議題2",
    description: "いい天気ですね",
    chatIds: ["chat3", "chat4"],
  },
  {
    id: "esquisse3",
    workId: "work2",
    createdAt: new Date("2021-01-01T00:00:00Z"),
    imageUrls: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    subject: "議題1",
    description:
      "こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは",
    chatIds: ["chat5", "chat6"],
  },
  {
    id: "esquisse4",
    workId: "work2",
    createdAt: new Date("2021-01-02T00:00:00Z"),
    imageUrls: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    subject: "議題2",
    description: "いい天気ですね",
    chatIds: ["chat7", "chat8"],
  },
];
