import { useEffect, useState } from "react"

export default function DashboardLayout() {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch("https://mybookstore-backend-x6z7.onrender.com/all-books")
            .then(res => res.json())
                .then(data => setBooks(data))
                
            },[])
    const handleDelete = (id) => {
        fetch(`https://mybookstore-backend-x6z7.onrender.com/book/${id}`, {
            mode: 'no-cors', method: "Delete" 
        })
            .then(res => res.json())
                .then(data => {
                    alert("Book is deleted successfully")
                    // setBooks(data);
                    location.reload();
                }
                )
    }
            // console.log(books);
    return (
        <div className="max-w-500px sm:ml-65 lg:ml-85 mr-20  px-4 my-12 w-full">
            <h2 className="mb-8 text-3xl text-center font-bold">Manage your books</h2>


            {/* Table for book data */}

<div className="relative overflow-x-auto w-full">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    NO.
                </th>
                <th scope="col" className="px-6 py-3">
                    Book name
                </th>
                <th scope="col" className="px-6 py-3">
                    Author Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit or Manage
                </th>
            </tr>
        </thead>
        <tbody>
            {
                books.map((book, i) => {
                    return (
                        <tr key={book._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                
                <td className="px-6 py-4 font-bold">
                    {i+1}
                </td>
                <td className="px-6 py-4">
                    {book.bookTitle}
                </td>
                <td className="px-6 py-4">
                    {book.authorName}
                </td>
                <td className="px-6 py-4">
                    {book.category}
                </td>
                <td className="px-6 py-4">
                    999$
                </td>
                <td className="px-6 py-4 justify-center">
                    <a className="text-black font-bold block hover:text-blue-300 text-center" href={`/admin/dashboard/edit-books/${book._id}`}>Edit</a>
                    <button onClick={() => handleDelete(book._id)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 mt-3 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                </td>
            </tr>
                    )
                })
            }
        </tbody>
    </table>
</div>

        </div>
    )
}