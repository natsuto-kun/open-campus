"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { FC } from "react";

export const LikeButton: FC = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    // いいねボタンがクリックされたときに、likesの状態を更新します
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>いいね！</button>
      <p>いいねの数: {likes}</p>
    </div>
  );
};
