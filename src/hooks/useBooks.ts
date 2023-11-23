"use client";

import { useState, useEffect } from "react";
import apiClient from "@/utils/apiClient";

export function useBooks() {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const exam_name = localStorage.getItem("myExamName");

    async function fetchBooks() {
      try {
        const res = await apiClient.get(
          `${apiClient.Urls.getBooks}/${exam_name}`
        );
        const data = res;
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return { books, loading };
}
