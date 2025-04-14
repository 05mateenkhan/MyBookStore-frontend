import { useEffect, useState } from "react"

export default function Shop() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://mybookstore-backend-x6z7.onrender.com/all-books', {
            // mode: 'no-cors',
            // method: "GET"
        })
            .then(data => data.json())
            .then(bookData => setBooks(bookData))
    }, [])


    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center">All books are here !!!</h2>

            <div className="gap-8 grid lg:grid-cols-4 sm:grid-col-2 md:grid-cols-3 grid-cols-1">
                {
                    books.map(book => 

                        <div key={book._id} className="mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href={`/book/${book._id}`}>
                                <img className="rounded-t-lg" src={book.imageURL} alt="" />
                            </a>
                            <div className="p-5">
                                <a href={`/book/${book._id}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.bookDescription.substring(0,100)}...</p>
                                <a href={`/book/${book._id}`} className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Buy now
                                     {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg> */}
                                </a>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}