import React from "react";

const Sectiontwo = () => {
    return(
        <div className=" bg-mobile lg:bg-desktop bg-cover bg-center flex  flex-col pb-20 lg:flex-row-reverse">
            <div className=" mt-20">
                <img src="illustration-2.svg"  alt="illustration two"/>
            </div>

            <div className=" lg:p-8">
                <h3 className=" mt-28 text-veryDarkBlue font-bold text-2xl lg:text-3xl lg:text-left">Stay productive wherever you are</h3>
                <h2 className=" text-left mt-12 mx-10 lg:mt-6 lg:mx-0 text-desaturatedBlue text-2xl lg:text-lg
                    lg:font-bold">Never let location be an issue when accessing your files. Fylo has your
                    covered for all your file storage needs.
                </h2>
                <h2 className=" text-left mt-9 mx-10 lg:mt-4 lg:mb-2 lg:mx-0 text-desaturatedBlue text-2xl
                   lg:text-lg lg:font-bold ">Securely share files and folders with friends, family and colleagues
                for live collaborations. No file attachments required!</h2>

                <div className=" flex flex-row justify-center text-moderateCyan text-lg lg:justify-start  ">
                    <a href="#"> See how fylo works</a>
                    
                    
                    <div className=" mt-1 ml-3">
                        <img className=" w-6" src="icon-arrow.svg" alt="icon arrow"/>
                    </div>
                    
                </div>

                <div className=" flex justify-center items-center mt-20 lg:justify-start "> 
                    <div className=" bg-white w-96 p-6 ">
                        <img  src="icon-quotes.svg"  alt="quotes"/>
                        <h4 className=" text-desaturatedBlue mt-4 text-lg">
                            Fylo has improved our team productivity by an order of 
                            magnitude. Since making thee switch out team has become a well
                        as oiled collaboration machine.
                        </h4>
                        <div className=" flex flex-row mt-4">
                            <img  className="  rounded-full w-10 h-10" src="avatar-testimonial.jpg" alt="avatar" />
                            <div>
                                <h4 className=" font-bold text-left ml-3 text-veryDarkBlue">Kyle Burton</h4>
                                <p className=" text-sm text-desaturatedBlue text-left ml-3">Founder & CEO, Huddle</p>
                            </div>

                        </div>
                    </div>

                </div>

                

            </div>


        </div>

        

        
    )
}
export default Sectiontwo