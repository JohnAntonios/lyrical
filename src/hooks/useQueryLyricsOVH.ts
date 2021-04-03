import { Lyrical, SongSearchFormData } from "$typings";
import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({ baseURL: "https://api.lyrics.ovh/v1" });

export default (searchFields: SongSearchFormData) =>
  useQuery<Lyrical>(
    "lyrical",
    async () => {
      try {
        const searchValues = Object.values(searchFields);

        const resourcePath = searchValues
          .map((searchValue) => `/${searchValue.replaceAll("&", "and")}`)
          .join("");

        const res = await axiosInstance.get(resourcePath);
        return res.data;
      } catch (error) {
        return error;
      }
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
