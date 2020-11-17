import React from "react";
import { ImCross } from "react-icons/im";
const UperNotify = () => {
    return (
        <div>
            <p style={{fontSize: '20px'}}>Shop From <font style={{ fontWeight: 'bold' }}>Your Local neighborhood Stores</font> / "Free Delivery Above 99 Rs." <font style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Shop Now</font>
                <ImCross className='crossIcon'/>
            </p>
        </div>
    );
}

export default UperNotify;