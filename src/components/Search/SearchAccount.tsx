import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Input, Stack, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { api } from "../../lib/api";
import useStore from "../../stores/hook";
import useSearch from "./hook/useSearch";
import Search from "../../pages/Search";
import { IUserList } from "../../types/store";

const SearchAccount = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const { user, users, getUsers } = useStore();
  const userId = user.id;
  const [loading, setLoading] = useState<boolean>(false);
  const [statusFollow, setStatusFollow] = useState<Map<number, boolean>>(
    new Map()
  );

  // Use the custom hook
  const { dataUser, noResults, loading: searchLoading } = useSearch(search);

  useEffect(() => {
    const fetchUsers = async () => {
      getUsers(userId);
    };
    fetchUsers();
  }, [userId]);

  const followFunc = async (followersId: number, followingId: number) => {
    setLoading(true);
    try {
      const res = await api.post("/follow", { followersId, followingId });
      if (res.data) {
        setStatusFollow((prev) => new Map(prev).set(followingId, true));
        console.log("Follow successful:", res.data);
      }
    } catch (error) {
      console.error("Follow error:", error);
    } finally {
      setLoading(false);
    }
  };

  const unfollow = async (followersId: number, followingId: number) => {
    setLoading(true);
    try {
      await api.post("/follow/unfollow", { followersId });
      setStatusFollow((prev) => new Map(prev).set(followingId, false));
      console.log("Unfollow successful");
    } catch (error) {
      console.error("Unfollow error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkFollow = async (followersId: number, users: IUserList[]) => {
      setLoading(true);
      try {
        const res = await api.post("/follow/check", { followersId, users });
        const followMap = new Map<number, boolean>(
          res.data.map((user: { id: number; isFollowing: boolean }) => [
            user.id,
            user.isFollowing,
          ])
        );
        const updatedStatusFollow = new Map<number, boolean>(
          users.map((user) => [user.id, followMap.get(user.id) || false])
        );
        setStatusFollow(updatedStatusFollow);
        console.log("Follow status updated");
      } catch (error) {
        console.error("Check follow error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (users && users.length > 0) {
      checkFollow(userId, users);
    }
  }, [userId, users]);

  return (
    <Box>
      <Box style={{ padding: 10, marginTop: 5 }}>
        <Input
          placeholder="Search your friend"
          disableUnderline
          sx={{
            py: 0.5,
            px: 2,
            width: "100%",
            border: "1px solid #3F3F3F",
            color: "white",
            borderRadius: "30px",
            backgroundColor: "#3F3F3F",
            alignItems: "center",
          }}
          startAdornment={
            <Stack sx={{ alignItems: "center" }}>
              <Icon
                icon="mdi:account-search-outline"
                style={{
                  color: "#B2B2B2",
                  width: "20px",
                  height: "20px",
                  marginRight: 5,
                }}
              />
            </Stack>
          }
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </Box>
      <Box style={{ marginTop: 22 }}>
        {searchLoading ? (
          <Typography style={{ color: "white", textAlign: "center" }}>
            Loading...
          </Typography>
        ) : noResults ? (
          <Box>
            <Search />
          </Box>
        ) : (
          dataUser?.map((user) => {
            const isFollowing = statusFollow.get(user.id);
            return (
              <Box
                style={{
                  display: "flex",
                  borderBottom: "1px solid gray",
                  padding: "10px",
                }}
                key={user.id}
              >
                {user.profile_pic ? (
                  <Avatar
                    sx={{ width: 20, height: 20 }}
                    src={user.profile_pic}
                  />
                ) : (
                  <Avatar sx={{ bgcolor: "yellow", width: 20, height: 20 }}>
                    <span style={{ fontSize: 10 }}>{user.username}</span>
                  </Avatar>
                )}
                <Box
                  style={{
                    paddingLeft: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography onClick={() => navigate(`/profile/${user.id}`)}>
                      {user.username}
                    </Typography>
                    <Typography style={{ color: "grey" }}>
                      {user.email}
                    </Typography>
                    <Typography> {user.bio}</Typography>
                  </Box>
                  {isFollowing ? (
                    <Button
                      style={{
                        padding: 5,
                        borderRadius: 50,
                        color: "gray",
                        backgroundColor: "#1d1d1d",
                        border: "1px solid gray",
                        cursor: "pointer",
                        height: 30,
                      }}
                      type="button"
                      onClick={() => unfollow(userId, user.id)}
                    >
                      Following
                    </Button>
                  ) : (
                    <Button
                      style={{
                        padding: 5,
                        borderRadius: 50,
                        color: "white",
                        backgroundColor: "#1d1d1d",
                        border: "1px solid ",
                        cursor: "pointer",
                        height: 30,
                      }}
                      type="button"
                      onClick={() => followFunc(userId, user.id)}
                    >
                      Follow
                    </Button>
                  )}
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default SearchAccount;
