"use client";

import { useState, useEffect } from "react";
import apiClient, { localBaseUrl } from "@/utils/apiClient";

const apiUrl = localBaseUrl + apiClient.Urls.getInstitutes;

export function useInstitutes(
  city?: string,
  class_mode?: string,
  language?: string
) {
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    async function fetchExams() {
      try {
        const requestData = {
          city: city || "",
          class_mode: class_mode || "",
          language: language || "",
          all: "all",
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
  }, []);

  return institutes;
}
