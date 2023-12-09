"use client";

import { useState, useEffect } from "react";
import apiClient, { localBaseUrl } from "@/utils/apiClient";

export function useInstitutes(
  courses: string,
  city?: any,
  classMode?: string,
  language?: string
) {
  const [institutes, setInstitutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    async function fetchExams() {
      const lowercaseCityyName =
        city?.toLowerCase();
      console.log("paramssss from hooooooooooooooook", courses, city);
      try {
        setIsLoading(true);
        const res = await apiClient.post(`${apiClient.Urls.getInstitutes}`, {
          courses: courses, city: lowercaseCityyName
        });
        const data = res;

        setInstitutes(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false)
        console.error("Error fetching exams:", error);
      }
    }

    fetchExams();
  }, [courses, city, classMode, language]);

  return { institutes, isLoading };
}
