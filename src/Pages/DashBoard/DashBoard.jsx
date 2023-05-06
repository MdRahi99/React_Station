import React, { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const DashBoard = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);
  return <div>
        {user && 
            <div>
                <span>{user?.displayName}</span>
                <img src={user?.photoURL} />
            </div>
        }
    </div>;
};

export default DashBoard;
