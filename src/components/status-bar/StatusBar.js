import React from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
const StatusBar = () => {
  return (
    <div>
      <p style={{ backgroundColor: '#f5f5f5',  padding: '10px',textAlign: 'end'}}>
      
        Welcome!
        <AiTwotoneLock/>
       <font style={{fontWeight:'bold',marginRight:'5px', color: 'gray', marginLeft:'5px' }}> Login/Register</font>
        <BsFillPersonFill/>
        <font style={{ fontWeight: 'bold', color: 'gray',marginRight: '5px' }}>  Vendor Registration</font>
      
      </p>
    </div>
  );
};

export default StatusBar;
