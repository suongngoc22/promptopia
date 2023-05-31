"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="justify-betweenn items-start">
        <div>
          <Image
            src={post.creator.image}
            alt="user_img"
            width={40}
            height={40}
            className="round-ful object-contain"
          />
          <div className="flex flex-col">
            <h3>{post.creator.username}</h3>
            <p>{post.creator.email}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PromptCard;
