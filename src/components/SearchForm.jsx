import { useState } from "react"
import { useSearchString } from "../lib/SerachString"
const SearchForm = ({onSearch}) => {
    const [initialSearch,setSearch]=useSearchString()
    // craete state for radio button
const[searchOption, setRadio]=useState("shows")

const changeHandler=(ev)=>{
    setSearch(ev.target.value) // set text value state
}

 //create rdio change handler
 const onRadioChange=(ev)=>{
    setRadio(ev.target.value)
}

const onSubmit=(ev)=>{  //here will make onsubmit funtion because form is declare in serach componnet and need to prevent here
    ev.preventDefault();
    //create a object and make api user-frendly of state aurgments which we will pass into search function  
    const option={
q:initialSearch,
searchOption
    }
    onSearch(option)

}
console.log(searchOption)
  return (
    <div>SearchForm
    <form onSubmit={onSubmit}>
            <input type="text" value={initialSearch} onChange={changeHandler}></input>
            <label>
                Shows
                <input type="radio" value="shows" name="search-option"
                 checked={searchOption==='shows'} onChange={onRadioChange}></input>
            </label>
            <label>
                Actors
                <input type="radio" value="actors" name="search-option"
                 checked={searchOption==='actors'} onChange={onRadioChange}></input>
           {/*with checked proprty will associate radio selection input state to inpur element */}
            </label> 
            <br></br>
            <button type="submit"> Search</button>
        </form>
       
        </div>
  )
}

export default SearchForm

