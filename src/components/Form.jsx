import { useState,useEffect } from "react"

function Form(props)
{
    // State to hold the data of our form
const [formData,setFormData]=useState({
    searchTerm:""
});
//Create handlechange function
const handlechange=(e)=>{
    // Use the event object to detect key, and value to update
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
}
//Handle submit function
const handleSubmit=(e)=>{
     // Prevent page from refreshing on form submission
     e.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.movieSearch(formData.searchTerm);
    console.log(formData.searchTerm)
}
    return(
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <input className="search" type="text" 
                name="searchTerm" 
                value={formData.searchTerm}
                onChange={handlechange} placeholder="Search for a movie.." />
                <input className="submit" type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default Form