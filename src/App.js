import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContextFunction from './Context/SearchContext';
import Home from './Pages/Home';
import WelcomePage from "./Pages/Welcome";
import RecipePage from "./Pages/Recipe";
import About from "./Pages/About";
//import Contact from "./Pages/Contact";
import SearchPage from "./Pages/SearchPage";
import AddNewRecipePage from "./Pages/AddNewRecipePage";
import SingleRecipePage from "./Pages/SingleRecipePage";

function App() {
  return (
    <BrowserRouter>
        <SearchContextFunction>
          <Routes>
            <Route exact path="/" element={<WelcomePage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/recipe" element={<RecipePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path= '/addnewrecipes' element = {<AddNewRecipePage/>} />
            <Route path="/search" element={<SearchPage/>}/>
            
            <Route path="/singlerecipepage/:id" element={<SingleRecipePage/>} />
            
          </Routes>
        </SearchContextFunction>
      </BrowserRouter>
  );
}
  
export default App;

//
//<Route path="/contact" element={<Contact/>}/>