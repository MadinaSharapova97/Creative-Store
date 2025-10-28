import React from 'react'
import { ClipLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#36d7b7" size={60} />
        </div>
      );
}

