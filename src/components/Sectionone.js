import React from "react";
import { useState } from "react";

const Sectionone = () => {
    const [emial, setEmail] = useState ('');
    const [errorMessage, setErrorMessage] = useState('');

    const varidateEmial = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);


    };

    const handleChange = (e) => {
        setEmail(e.target.value);

        if(!varidateEmial (e.target.value)) {
            setErrorMessage('please check you email');

        }
        else {
            setErrorMessage('')
        };
    }
    return(
        <div className="flex flex-col mr-6  ml-6 mb-5 lg:flex-row-reverse">
            
            <div className=" lg:w-1/2">
                <div className=" mt-24 p-6">
                    <img src="illustration-1.svg" alt="illustration one"/>
                </div>
            </div>
            
            <div className=" lg:w-1/2 lg:mt-28 lg:p-5 ">
                <h1 className=" text-4xl mb-5 text-veryDarkBlue lg:leading-10 text-center lg:text-left font-bold">All your files in one secure location,
                    accessible anywhere.
                </h1>
                <h3 className="  text-veryDarkBlue mb-5 text-2xl text-center lg:text-left lg:text-lg ">
                    Fylo stores your most important files in one secure location.
                    Access them wherever you need, share and 
                    collaborate with friends, family and co-workers.
                </h3>

                <div className=" flex flex-col lg:flex-row gap-4">
                    <div>
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={emial}
                        onChange={handleChange}
                        required
                        className=" w-96 lg:w-80 rounded-md border border-veryDarkBlue p-2" 

                        />
                        {errorMessage && <p className=" text-red-600"> {errorMessage}</p>}
                    </div>

                    <div>
                        <button type="submit" className=" text-white bg-brightBlue mt-5 lg:mt-0 w-96 lg:w-40 p-2
                         rounded-md text-lg font-bold cursor-pointer hover:brightness-200">
                            Get Started
                            </button>
                    </div>

                </div>
                
            </div>
            
            


            
            

        </div>
    )
}

export default Sectionone