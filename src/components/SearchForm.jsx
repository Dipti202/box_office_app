import { useState } from "react"
import { styled } from "styled-components"
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
    <div>
    <form onSubmit={onSubmit}>
            <SearchInput type="text"
             value={initialSearch} 
             placeholder='search for something'
             onChange={changeHandler}/>
            <RadiosWrapper>
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
            </RadiosWrapper>
           
            <br></br>
            <SearchButtonWrapper>
            <button type="submit"> Search</button>
                </SearchButtonWrapper>
            
        </form>
       
        </div>
  )
}

export default SearchForm;
const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
