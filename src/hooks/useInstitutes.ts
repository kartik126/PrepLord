"use client";

import { useState, useEffect } from "react";
import apiClient, { localBaseUrl } from "@/utils/apiClient";

export function useInstitutes(
  courses: string,
  city?: string,
  class_mode?: string,
  language?: string
) {
  const [institutes, setInstitutes] = useState([]);

  console.log("paramssss from hooooooooooooooook", courses);

  useEffect(() => {
    async function fetchExams() {
      try {
        const requestData = {
          courses: courses || "",
          city: city || "",
          class_mode: class_mode || "",
          language: language || ""
        };

        const res = await apiClient.post(`${apiClient.Urls.getInstitutes}`, {
          requestData,
        });
        const data = res;

        setInstitutes(data);

        console.log("dataaaaaaa", data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    }

    fetchExams();
  }, [courses,city,class_mode,language]);

  return institutes;
}
