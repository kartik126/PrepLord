"use client";

import { useState, useEffect } from "react";
import apiClient from "@/utils/apiClient";

const apiUrl = apiClient.Urls.getInstitutes;

export function useInstitutes() {
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    async function fetchExams(
      city?: string,
      class_mode?: string,
      language?: string
    ) {
      try {
        const requestData = {
          city: city || "",
          class_mode: class_mode || "",
          language: language || "",
          all: "all",
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(requestData), // Convert request data to JSON
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

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
