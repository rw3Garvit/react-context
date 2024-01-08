import React, { useContext, useEffect } from "react";
import { myCon } from "../../Mycontext";

const Faculty = () => {
  const [first, setfirst] = useContext(myCon);

  console.log(first);

  useEffect(() => {
    setfirst("my name is garvit")
  }, []);

  return <div>Faculty,</div>;
};

export default Faculty;
