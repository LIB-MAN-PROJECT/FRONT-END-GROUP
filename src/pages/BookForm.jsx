import React, { useState } from 'react';

const BookForm = () => {
 // State to show/hide the success message
  const [showSuccess, setShowSuccess] = useState(false);
  // State to simulate loading
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    // Start loading
    setLoading(true);

    // Simulate a network request or some async action
    setTimeout(() => {
      setLoading(false); // End loading
      setShowSuccess(true); // Show success message

      // Hide the success message after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }, 1000); // Simulates a 1-second "Add" process
  };

     
  return (
    <div className="max-w-2xl mx-auto p-3 bg-white rounded-2xl shadow-md space-y-6 border-2">
       {showSuccess && (
        <div style={{ color: 'green', marginBottom: '10px' }}>
           Book added successfully!
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-800">Add a Book</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            placeholder="image-url"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Book Title"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Summary
          </label>
          <textarea
            placeholder="Short summary of the book"
            rows="4"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            placeholder="Author Name"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Publisher
          </label>
          <input
            type="text"
            placeholder="Publisher Name"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Year of Publication
          </label>
          <input
            type="number"
            placeholder="2025"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            placeholder="e.g., Fiction, Romance"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating (1 to 5)
          </label>
          <input
            type="number"
            min="1"
            max="5"
            placeholder="4"
            class="mt-1 block w-full border rounded-md border-gray-300 shadow-sm p-2"
          />
        </div>

        <div className="flex space-x-4">
          <button onClick={handleAdd} disabled={loading}

            type="text"
            className="ml-6 w-5/12 bg-blue-600 px-6 text-white p-2 rounded-xl hover:bg-blue-700 transition"
          >
            Add
          </button>
          <button
            type="edit"
            className="w-5/12 bg-blue-600 text-white px-6 p-2 rounded-xl hover:bg-blue-700 transition"
          >
            Edit
          </button>
                    {loading ? 'Adding...' : ''}

        </div>
      </form>
    </div>

    // <form className="width-[40] p-20px border-1px rounded-lg border-gray-600">
    //   <div>
    //     <label>Image:</label>
    //     <input type="text" id="Image" required />
    //   </div>

    //   <div>
    //     <label>Title:</label>
    //     <input type="text" id="Title" required />
    //   </div>

    //   <div>
    //     <label>Summary:</label>
    //     <input type="text" id="Summary" required />
    //   </div>

    //   <div>
    //     <label>Author:</label>
    //     <input type="text" id="Name" required />
    //   </div>

    //   <div>
    //     <label>Publisher:</label>
    //     <input type="text" id="name" required />
    //   </div>

    //   <div>
    //     <label>Year of Publisher:</label>
    //     <input type="text" id="date" required />
    //   </div>
    // </form>
  );
};


export default BookForm