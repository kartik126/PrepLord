"use client";

import { useState, useEffect } from "react";
import apiClient from "@/utils/apiClient";

export function useExams() {
  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExams() {
      try {
        setIsLoading(true);
        const res = await apiClient.get(`${apiClient.Urls.getExams}`);
        const data = res.data;
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchExams();
  }, []);

  return { exams, isLoading };
}
