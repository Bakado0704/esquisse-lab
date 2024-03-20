import { users } from "@/dummyData/users";
import { esquisses } from "@/dummyData/esquisses";
import { Post } from "@/types/application/post.types";

export const getPosts: () => Post[] = () => {
  return esquisses.map((esquisse) => {
    const user = users[0];
    return {
      createdAt: esquisse.createdAt,
      workId: esquisse.workId,
      subject: esquisse.subject,
      description: esquisse.description,
      userName: user.name,
      imageUrl: esquisse.imageUrls?.[0],
      iconUmageUrl: user.iconImageUrl,
    };
  });
};
