import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../Styles/component.css';
import { useState } from "react";
import { signOut } from "firebase/auth";
import UserPage from "../Pages/UserPage";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AddNewRecipePage from "../Pages/AddNewRecipePage";

export default function Login () {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/home";
        });
      };
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/user");
        });
      };

    return(
        <>
            
            {!isAuth ? (
            <button className="login-with-google-btn" onClick={signInWithGoogle}>Login</button>
//<Link to="/login" id="login-button"> Login </Link>
            ) : (
            <>
                <Link to="/addnewrecipes"><button>Add new recipe</button></Link>
                <Link to="/user"><button>My kitchen</button></Link>
                <button onClick={signUserOut}> Log Out</button>
            </>
            )}
            <Routes>
                
                <Route path="/user" element={<UserPage isAuth={isAuth} />} />
                <Route path="/addnewrecipes" element={<AddNewRecipePage isAuth={isAuth} />} />
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            </Routes>
        </>
    )
}

//<Link to="/login" id="login-button">Login</Link>
//<Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
//<Link to="/addnewrecipes"> Create Post </Link>