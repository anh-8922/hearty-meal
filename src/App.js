import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContextFunction from './Context/SearchContext';
import Home from './Pages/Home';
import WelcomePage from "./Pages/Welcome";
import RecipePage from "./Pages/Recipe";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SearchPage from "./Pages/SearchPage";
import AddNewRecipePage from "./Pages/AddNewRecipePage";
import SingleRecipePage from "./Pages/SingleRecipePage";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Login from "./Components/Login";
import UserPage from "./Pages/UserPage";
import Tools from "./Pages/Tools";
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/login";
        });
      };

  return (
    <BrowserRouter>
      <div className="background-container">
        <SearchContextFunction>
          <Routes>
            <Route exact path="/" element={<WelcomePage/>}/>
            <Route path="/home/*" element={<Home/>}/>
            <Route path="/recipe/*" element={<RecipePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path= '/addnewrecipes' element = {<AddNewRecipePage/>} />
            <Route path="/search" element={<SearchPage/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path="/singlerecipepage/:id" element={<SingleRecipePage/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user" element={<UserPage/>}/>
          </Routes>
        </SearchContextFunction>
      </div>
    </BrowserRouter>
  );
}
  
export default App;

//https://hearty-meal.vercel.app/
//

//