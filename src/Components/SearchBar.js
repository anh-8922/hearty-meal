import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import { useNavigate } from 'react-router-dom';
import '../Styles/component.css';
import {BsSearch} from 'react-icons/bs';

export default function  SearchBar ({children}) {

    const {searchQuery, setSearchQuery} = useContext(SearchContext)
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
          setSearchQuery(searchQuery);
          navigate(`/search?q=${searchQuery}`)
          // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        } else {
          alert('Please enter valid text.');
        }
      };

    return (
        <div className="SearchInput">
            <input type='search'
          
                   label="Enter your text"
                   placeholder="Search..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}/>
            <button className="btn-search" onClick={handleSearch}><BsSearch/></button>
        </div>
    )
}