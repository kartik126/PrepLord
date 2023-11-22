// BookCard.tsx

import React from "react";

interface Book {
  _id: string;
  title: string;
  author: string;
  image: string;
  price: string;
  examType: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="cursor-pointer max-w-[250px] p-3 flex flex-col items-center rounded overflow-hidden shadow-lg">
      <img
        src={book.image}
        alt={book.title}
        className="px-7 py-7 w-full object-cover mb-3"
      />
      <div className="px-6">
        <div className="font-semibold text-sm text-center mb-2">{book.title}</div>
        <p className="text-gray-700 text-center mb-2">{book.author}</p>
        {/* <p className="text-gray-700 text-base mb-2">
          Exam Type: {book.examType}
        </p> */}
        <p className="text-gray-700 text-center font-semibold text-red-500">Price: ${book.price}</p>
      </div>
    </div>
  );
};

export default BookCard;
