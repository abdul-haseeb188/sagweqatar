import React from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Topbar = () => {
    return (
        <div>
            <p className="topbar">
                Welcome! <AiTwotoneLock/>
                Login/Register <BsFillPersonFill/>
 Vendor Registration</p>
        </div>
    );
}

export default Topbar;