import React from 'react';

const TopArts = () => {
    return (
        <div className="mt-15  md:mt-20 lg:mt-25   bg-purple-50 py-10 md:py-15 lg:py-20">
      <div className="mb-15 text-center space-y-4">
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold ">Top Artists of the Week</h1>
        <p className="text-gray-500 md:text-lg lg:text-xl">
          Learn from the best Artist of the week
        </p>
      </div>

      <div className="grid p-4 md:p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 lg:gap-6">
        <div className="card w-full  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
          <figure className="relative">
            <img
              src={
                "https://i.ibb.co.com/nN5KvWmH/53506ac7f76d2f764182e72c1dfb463e.jpg"
              }
              alt="img"
              className="h-52 w-full object-cover rounded-t-2xl"
            />
            
          </figure>

          <div className="card-body">
            <h2 className="card-title">Morning Glow</h2>
            <p className="text-gray-500">Alice Johnson</p>

            
              <p className="text-sm text-gray-500">category : <span className='bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-transparent bg-clip-text'>Landscape</span></p>
            

            
          </div>
        </div>
        {/* card-2 */}
        <div className="card w-full  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
          <figure className="relative">
            <img
              src={
                "https://i.ibb.co.com/8DmkqPSg/9cd14696654092e47bfd83a643a55aaa.jpg"
              }
              alt="img"
              className="h-52 w-full object-cover rounded-t-2xl"
            />
            
          </figure>

          <div className="card-body">
            <h2 className="card-title">City Lights</h2>
            <p className="text-gray-500">Michael Brown</p>

            
              <p className="text-sm text-gray-500">category : <span className='bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-transparent bg-clip-text'>Urban</span></p>
            

            
          </div>
        </div>
        {/* card-3 */}
        <div className="card w-full  bg-base-100 shadow-xl rounded-2xl  hover:scale-105 transition-transform duration-300">
          <figure className="relative">
            <img
              src={
                "https://i.ibb.co.com/8DrQ66Hr/eb0f5a7580fec65eb002a6746fc062c3.jpg"
              }
              alt="img"
              className="h-52 w-full object-cover rounded-t-2xl"
            />
            
          </figure>

          <div className="card-body">
            <h2 className="card-title">Silent Forest</h2>
            <p className="text-gray-500">Sophia Lee</p>

            
              <p className="text-sm text-gray-500">category : <span className='bg-gradient-to-r from-[#FF8C88] to-[#79D7D0] text-transparent bg-clip-text'>Nature</span></p>
            

            
          </div>
        </div>
      </div>
    </div>
    );
};

export default TopArts;