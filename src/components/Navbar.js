import React from "react";

const Navbar = () => {
    return(
        <div className="flex flex-row p-5 ">
            <div className=" mr-auto lg:w-24"><img src="logo.svg"/></div>
            <div className="  text-lg flex flex-row gap-7">
                <h5 className="">Features</h5>
                <h5>Team</h5>
                <h5>Sign In</h5>
            </div>
        </div>
    )
}

export default Navbar