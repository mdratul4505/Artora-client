import React from 'react';
import {  FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
         <div className="min-h-screen flex justify-center items-center">
            <FadeLoader></FadeLoader>
            </div>
    );
};

export default Loading;