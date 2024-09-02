import { useState, useEffect } from "react";
import { getUserByUsername } from "../../../lib/api/call/user";
import { IUserList } from "../../../types/store";

const useSearch = (search: string) => {
  const [dataUser, setDataUser] = useState<IUserList[] | undefined>(undefined);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);
      try {
        const res = await getUserByUsername(search);
        if (res && res.status === 200) {
          setDataUser(res.data);
          setNoResults(res.data.length === 0);
        } else {
          setDataUser([]);
          setNoResults(true);
        }
      } catch (error) {
        console.error("Search error:", error);
        setDataUser([]);
        setNoResults(true);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchingData();
    } else {
      setDataUser([]);
      setNoResults(false);
    }
  }, [search]);

  return { dataUser, noResults, loading };
};

export default useSearch;
