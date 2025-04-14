import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function UploadBook() {
    const bookCategories = ["Fiction", "Non-Fiction","Mystery","Programming","Science", "Fun", "Fantasy","Horror"];
    const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (e) => {
        setSelectedBookCategory(e.target.value);
    }

    const handleBookSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const bookDescription = form.bookDescription.value;
        const category = selectedBookCategory;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
            bookTitle, authorName, imageURL, bookDescription, category, bookPDFURL
        }
        console.log(bookObj);
        fetch("https://mybookstore-backend-x6z7.onrender.com/upload-book", {
              method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookObj),
        })
            .then(res => res.json())
                .then(data => {
            alert("Book uploaded successfully")
            form.reset();
        })
    }
    // console.log(selectedBookCategory)
    return (
        <div className="sm:ml-33 md:ml-82 xl:ml-0 w-full">
        <div className="px-4 my-12">
            <h2 className="mb-8 text-3xl text-center font-bold">Upload a book</h2>

            

<form onSubmit={handleBookSubmit} className="max-w-sm mx-auto flex lg:w-1180px flex-col flex-wrap gap-4">
  <div className="flex gap-8">
  <div className="mb-5">
    <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Title</label>
    <input type="text" id="bookTitle" name="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" required />
  </div>
  <div className="mb-5">
    <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author name</label>
    <input type="text" id="authorName" name="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Author name" required />
  </div>
  </div>
  {/* 2nd row */}
  <div className="flex gap-8">
  <div className="mb-5">
    <label htmlFor="imageURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Image Url</label>
    <input type="text" id="imageURL" name="imageURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image url" required />
  </div>
  <div className="mb-5">
  <label htmlFor="inputState" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Category</label>
  <select id="inputState" name="category" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
    {
    bookCategories.map((option) => <option value={option} key={option}>{option}</option>)
    }
  </select>
  </div>
  </div>

  {/* 3rd row */}


  <div className="flex gap-8">
  <div className="mb-5 w-full">
    
<label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Description</label>

<textarea id="bookDescription" name="bookDescription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your book description here..." required></textarea>

  </div>
  
  </div>

  {/* Fourth row  */}
  <div className="flex gap-8">
  <div className="mb-5 w-full">
    
  <label htmlFor="bookPDFURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book Pdf link</label>
  <input type="text" id="bookPDFURL" name="bookPDFURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pdf url" required />

  </div>
  </div>


  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload Book</button>
</form>

</div>
</div>
    )
}