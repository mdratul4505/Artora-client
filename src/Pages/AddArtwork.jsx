// import React, { use, useEffect } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import Aos from 'aos';
// import "aos/dist/aos.css";
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router';


// const AddArtwork = () => {

//   const navigate = useNavigate();

//   const handelSubmit = (e) =>{
//     e.preventDefault()
//     const form = e.target;

//     const formData = {
//       image: form.image.value,
//       title: form.title.value,
//       category: form.category.value,
//       medium: form.medium.value,
//       description: form.description.value,
//       dimensions: form.dimensions.value,
//       price: form.price.value,
//       visibility: form.visibility.value,
//       userName: user?.displayName,
//       userEmail: user?.email,
//       created_at: new Date(),
//       likes: 0,
//     }
//     fetch('http://localhost:3000/explore-artworks' ,{
//       method:'POST',
//       headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//     })
//     .then(res => res.json())
//     .then(data =>{
//       console.log(data)
//       toast.success(" Artwork added successfully!");
//       form.reset()
//       navigate("/my-gallery");
//     }).catch(error =>{
//       console.log(error)
//        toast.error(" Failed to add artwork. Try again!");
//     })

//   }

//       useEffect(() => {
//         Aos.init({
//           offset: 200,
//           duration: 1000,
//           easing: "ease-in-sine",
//           delay: 100,
//         });
//       }, []);

//     const {user} = use(AuthContext)

//     return (
        
//     <div className="min-h-screen bg-[#FCF9F5]  flex items-center justify-center px-4 py-20">
//       <form onSubmit={handelSubmit}
//       data-aos="zoom-in-down"
//       className="bg-white rounded-xl shadow-md w-full max-w-sm lg:max-w-xl md:max-w-lg space-y-5 px-6 py-10">

//         <div>
//           <h1 className='text-center font-semibold text-2xl'>Upload Your Artwork</h1>
//           <p className='text-center text-gray-600'>Share your creativity with the world. Fill in the details below.</p>
//         </div>

//         <div className=''>
//           <label className="block text-sm font-medium text-gray-700">
//             Image URL <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="url"
//             name="image"
//             required
            
//             className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Title <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="title"
//             required
           
//             className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             name="category"
//             required
//             className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//           >
//             <option value="">Select category</option>
//             <option value="painting">Painting</option>
//             <option value="digital">Digital Art</option>
//             <option value="photography">Photography</option>
//             <option value="sculpture">Sculpture</option>
//             <option value="illustration">Illustration</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Medium / Tools <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="medium"
//             required
//             placeholder="e.g. Oil on canvas, Photoshop"
//             className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             name="description"
//             required
//             rows="4"
//             placeholder="Describe your artwork..."
//             className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//           ></textarea>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Dimensions <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="dimensions"
             
             
//               className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Price ($) <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="number"
//               name="price"
             
             
//               className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//             />
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Your Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="Name"
//               required
//               value={user?.displayName || ""} 
//               readOnly
//               className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Your Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={user?.email || ""}
//               readOnly
//               placeholder="Enter your email"
//               className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//             />
//           </div>
//         </div>


//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Visibility
//           </label>
//           <select
//             name="visibility"
//             defaultValue="public"
//             className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
//           >
//             <option value="public">Public</option>
//             <option value="private">Private</option>
//           </select>
//         </div>


//         <div className="pt-4">
//           <button
//             type="submit"
//             className="w-full  px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white font-semibold hover:opacity-90 transition"
//           >
//             Submit Artwork
//           </button>
//         </div>
//       </form>
//     </div>


//     );
// };

// export default AddArtwork;

import React, { useEffect, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddArtwork = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // AuthContext থেকে user নেওয়া

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      image: form.image.value,
      title: form.title.value,
      category: form.category.value,
      medium: form.medium.value,
      description: form.description.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
      userName: user?.displayName || "",
      userEmail: user?.email || "",
      userPhoto: user?.photoURL || "", 
      created_at: new Date(),
      likes: 0,
    };

    fetch("http://localhost:3000/explore-artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Artwork added successfully!");
        form.reset();
        navigate("/my-gallery");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add artwork. Try again!");
      });
  };

  return (
    <div className="min-h-screen bg-[#FCF9F5] flex items-center justify-center px-4 py-20">
      <form
        onSubmit={handelSubmit}
        data-aos="zoom-in-down"
        className="bg-white rounded-xl shadow-md w-full max-w-sm lg:max-w-xl md:max-w-lg space-y-5 px-6 py-10"
      >
        <div>
          <h1 className="text-center font-semibold text-2xl">
            Upload Your Artwork
          </h1>
          <p className="text-center text-gray-600">
            Share your creativity with the world. Fill in the details below.
          </p>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="image"
            required
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            required
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            required
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
          >
            <option value="">Select category</option>
            <option value="painting">Painting</option>
            <option value="digital">Digital Art</option>
            <option value="photography">Photography</option>
            <option value="sculpture">Sculpture</option>
            <option value="illustration">Illustration</option>
          </select>
        </div>

        {/* Medium / Tools */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Medium / Tools <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="medium"
            required
            placeholder="e.g. Oil on canvas, Photoshop"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            required
            rows="4"
            placeholder="Describe your artwork..."
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
          ></textarea>
        </div>

        {/* Dimensions & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dimensions <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dimensions"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price ($) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>
        </div>

        {/* User Info: Name, Email, Photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Name"
              required
              value={user?.displayName || ""}
              readOnly
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={user?.email || ""}
              readOnly
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Photo
            </label>
            <input
              type="text"
              name="photoURL"
              value={user?.photoURL || ""}
              readOnly
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
            />
          </div>
        </div>

        {/* Visibility */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Visibility
          </label>
          <select
            name="visibility"
            defaultValue="public"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#FCF7F5] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C88]"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-white font-semibold hover:opacity-90 transition"
          >
            Submit Artwork
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtwork;
