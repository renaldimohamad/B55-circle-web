import React, { useContext, useState } from "react";
import useStore from "../../stores/hook";
import { Box, Avatar, Typography, Stack, IconButton } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Store } from "../../stores";
import Galery from "./Galery";

const PostList = () => {
  const { getPosts, posts, user } = useStore();
  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  React.useEffect(() => {
    getPosts();
    console.log(posts);
    if (posts) {
      const initialLikes = posts.reduce((acc, post) => {
        acc[post.id] = post.likes || 0; // Replace with actual like count if available
        return acc;
      }, {});
      setLikes(initialLikes);
      console.log(likes);
    }
  }, []);

  const handleLike = (postId: string) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + (likedPosts.has(postId) ? -1 : 1), // Increment or decrement like count
    }));

    setLikedPosts((prevLikedPosts) => {
      const updatedLikedPosts = new Set(prevLikedPosts);
      if (updatedLikedPosts.has(postId)) {
        updatedLikedPosts.delete(postId);
      } else {
        updatedLikedPosts.add(postId);
      }
      return updatedLikedPosts;
    });

    // Optional: Update backend with like status
    // updateLikeInBackend(postId, !likedPosts.has(postId));
  };

  return (
    <Box>
      {posts.map((post: any) => (
        <Box sx={{ border: "solid 1px #3F3F3F", py: 2, px: 2 }}>
          <Stack direction={"row"} spacing={1}>
            <Avatar src="/assetss/images/photo-profile2.png" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Stack direction={"row"} gap={"4px"}>
                <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
                  {user.username || "Unknown User"}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#909090" }}>
                  @nmonarizqa
                </Typography>
                <Icon
                  icon="fluent-mdl2:radio-bullet"
                  style={{ color: "#B2B2B2", width: "7px", height: "16px" }}
                />
                <Typography sx={{ fontSize: 14, color: "#909090" }}>
                  17h
                </Typography>
              </Stack>
              <Typography key={post.id}>{post.content}</Typography>

              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <IconButton onClick={() => handleLike(post.id)}>
                  <Icon
                    icon={
                      likedPosts.has(post.id) ? "ion:heart" : "akar-icons:heart"
                    }
                    style={{
                      color: likedPosts.has(post.id) ? "red" : "#B2B2B2",
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </IconButton>

                <Typography fontSize={"14px"} color={"#909090"}>
                  293
                </Typography>
                <img
                  src="/assetss/images/message-text.png"
                  alt="Comment.jpg"
                  width={"24px"}
                />
                <Typography fontSize={"14px"} color={"#909090"}>
                  381 Reaplies
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default PostList;
