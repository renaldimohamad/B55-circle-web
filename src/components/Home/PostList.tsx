import { useState, useEffect } from "react";
import useStore from "../../stores/hook";
import { Box, Avatar, Typography, Stack, IconButton } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js"; // Import API utilities
import Like from "../like/like";
import { IPostModel } from "../../types/post";

const PostList = () => {
  const { getPosts, posts, user } = useStore();
  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <Box>
      {posts.map((post: IPostModel) => (
        <Box key={post.id} sx={{ border: "solid 1px #3F3F3F", py: 2, px: 2 }}>
          <Stack direction={"row"} spacing={1}>
            <Avatar src="/assetss/images/photo-profile2.png" />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Stack direction={"row"} gap={"4px"}>
                <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
                  {post.author.username || "Unknown User"}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#909090" }}>
                  @{post.author.username || "Unknown User"}
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
                <Like postId={post.id} />
                <img
                  src="/assetss/images/message-text.png"
                  alt="Comment.jpg"
                  width={"24px"}
                />
                <Typography fontSize={"14px"} color={"#909090"}>
                  381 Replies
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
