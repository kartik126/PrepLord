import apiClient from "@/utils/apiClient";
import { useEffect, useState } from "react";

export function usePaper(exam_name: string) {
  const [papers, setpapers] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    async function fetchPaper() {
      try {
        const res = await apiClient.get(
          `${apiClient.Urls.getPapers}/${exam_name}`,
          {}
        );
        const data = res;
        console.log("previous year papers data", data);
        setpapers(data);
        setisLoading(false);
      } catch (error) {}
    }

    fetchPaper();
  }, []);

  return { papers, isLoading };
}
