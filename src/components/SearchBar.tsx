
import { onSearch } from "./types";
import "./SearchBar.css"
import {FaSearch} from "react-icons/fa"



const SearchBar:React.FC<onSearch> = ({onSearch}) => {
    const handleSearch = (e:any) => {
        onSearch(e.target.value);
    }

    return (
        <div className="search-bar-container">
        <input 
            type="text" 
            onChange={handleSearch} 
            placeholder="Search..." 
            />
            <FaSearch color="#e83d43"/>
            </div>
    )

}

export default SearchBar