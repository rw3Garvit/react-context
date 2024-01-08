import React from "react";

const Subadmin = () => {
  return (
    <div>
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your email" />
      <input type="text" placeholder="Enter your user name" />
      <input type="radio" name="gender" value="male" />
      male : <input type="radio" name="gender" value="female" />
      female : <input type="text" name="department" placeholder="departmernt" />
      <input type="password" name="pass" placeholder="pass" />
      <button>Add</button>
    </div>
  );
};

export default Subadmin;
