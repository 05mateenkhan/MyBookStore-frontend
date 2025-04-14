import { useEffect, useState } from "react";
import BookCards from '../components/BookCards'
export default function BestSellerBooks() {
    const[books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://mybookstore-backend-x6z7.onrender.com/all-books")
            .then(res => res.json())
                .then(data => setBooks(data.slice(0,8)));
    }, [])
    return (
        <div>
            <BookCards books={books} headline="Best seller books"/>
        </div>
    )
}
