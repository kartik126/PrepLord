"use client";

import { useState, useEffect } from "react";
import apiClient from "@/utils/apiClient";

export function useExams() {
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    async function fetchExams() {
      try {
        const res = await apiClient.get(`${apiClient.Urls.getExams}`);
        const data = res.data;
        setInstitutes(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    }

    fetchExams();
  }, []);

  return institutes;
}
