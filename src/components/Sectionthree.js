import React from "react";
import { useState } from "react";

const Sectionthree = () =>{
    const [mail, setMail] = useState ('');
    const [errortext, setErrorText] = useState('');

    const verifyEmial = (mail) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(mail);


    };


    const handlemail = (e) =>{
        const email = e.target.value.trim();
        setMail(email);

        if(!verifyEmial (e.target.value)) {
            setErrorText('please check you email');

        }
        else {
            setErrorText('')
        };
    }
    return(
        <div className=" flex flex-col  bg-desaturatedBlue pb-36 lg:flex-row lg:p-20 ">
            
          <div className=" p-10 lg:p-0 lg:w-1/2 lg:mr-auto"> 
                <h1 className=" mt-10  text-white text-4xl font-semibold lg:mt-0 lg:text-left">Get early access today</h1>
                <h3 className=" text-white text-2xl mt-8 leading-10 lg:mt-6 lg:text-left lg:text-lg">It only takes a minute to sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you.
                </h3>
            </div>

            <div className=" flex flex-col gap-4 lg:items-start lg:justify-center">
                    <div>
                        <input
                        type="email"
                        name="mail"
                        placeholder="email@example.com"
                        value={mail}
                        onChange={handlemail}
                        required
                        className= {`bg-white w-96  rounded-md p-3 border lg:rounded-sm lg:p-2 ${ errortext ? 'border-red-500': 'border-gray-400'}`}

                        />
                        {errortext && <p className=" text-white"> {errortext}</p>}
                    </div>

                    <div>
                        <button type="submit" className=" text-white bg-brightBlue mt-1 p-3 rounded-md text-lg font-bold
                         lg:mt-0 w-96 lg:w-56 lg:p-1 lg:rounded-sm
                        ">Get Started For Free</button>
                    </div>

                </div>
                
            

        </div>
    )
}

export default Sectionthree