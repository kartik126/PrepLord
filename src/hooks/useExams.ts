"use client"

import { useState, useEffect } from "react";
import apiClient from "@/utils/apiClient";

export function useExams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    async function fetchExams() {
      try {
        const res = await apiClient.get(`${apiClient.Urls.getExams}`);
        const data = res.data;
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    }

    fetchExams();
  }, []);

  return exams;
}
