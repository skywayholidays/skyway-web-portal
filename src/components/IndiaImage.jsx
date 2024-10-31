import React from "react";
import { IncredibleIndia } from "../assets/images";

const IndiaImage=()=>{
    return(

        <div className="flex py-10 bg-white_2 w-screen flex-col">
            <div className="flex justify-center items-center px-5">
                <img src={IncredibleIndia} alt="Incredible India" />
            </div>
        </div>
    );
}

export default IndiaImage;