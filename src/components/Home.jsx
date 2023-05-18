import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { searchShows,searchActor } from "../api/tvmaze"
import SearchForm from "./SearchForm"
import ShowGrid from "../show/ShowGrid"
import ActorGrid from "../actor/ActorGrid"


  //       //create new state to track recives api data because when we search 
  //       //data it can be empty ,unload and many more
  //   const [apiData,setApiData]=useState(null) 

  //   //create state to handle api data errors whwn evere get error place its inside  state
  //   const[apiError,setApiDataError]=useState(null)

  //   // here we will pass option object directly or can destructing.i am doing destructing
  //   const onSearch=async({q,searchOption})=>{
  //       //ev.preventDefault();
   
  //  //  wrap it into try block in case fails of api  try block will fail error split out into catch block 
  //       try{
  //            // remmember need to update state becuse once we click on search error message occur in case of search next time click on serach next request api 
  //   //data will dangling with priovious state and still will show privious state message. so it is important to set state for every new
  //   // request
    
  //   setApiDataError(null) // so set error privious request 
  //   let result;
  //   if(searchOption==='shows')
   
  //   { 
  //   result= await searchShows(q)// call func and send search query as an argument
  //   console.log(result)}
  //   else{
  //    result= await searchActor(q)// call func and send search query as an argument
  //   console.log(result)
   
  //   }
  //   setApiData(result)
  //     }catch(error)
  //     {
  //       setApiDataError(error)
  //     }
        
  //   } 

   
    // helper function to render api instead of directly write map method inside div we make a helper function
    //to manage logic condition. because we can can any error,empty data o 
   
    function Home() {
      
      const[filter,setFilter]=useState(null)
//inusequery will not usestate hook becuase state import directly
   
const{data:apiData,error:apiError}=useQuery({
  queryKey:['search', filter],
  queryFn:()=>filter.searchOption==='shows'?searchShows(filter.q)
  :searchActor(filter.q),
  enabled: !!filter, //if filter is null then select quer will disabled,apply filter when its true
  refetchOnWindowFocus:false //require when refocus on windoe re-fetch multiple request by query hook
})
const onSearch=async({q,searchOption})=>{
  setFilter({q,searchOption})
}

const renderApi=()=>{

       
if(apiError) //when we deal with api need to handle error
{
    return <div>error occured:{apiError.message}</div>
   
}

// handle null array data. in case we get api data null as result then we will get an error
// in such case ued otional chaning to prevent null error
//if appi data is truthy then ?(optinal chaing) mark will make sure js acess and used api length property
//otherwise in xcase of falsy can not treat  property length of null and will display message 
  
if(apiData?.length===0)
{
  return<div> no result found
    </div>
}
if(apiData)
        {
            return apiData[0].show ? <ShowGrid shows={apiData}/>:<ActorGrid actors={apiData}/>
              // make shows ,actor logic isolated via componets 
                    // apiData.map((data=>
                    
                    // <div key={data.show.id}>  
                    //     {data.show.name}
                    // </div>)):
                    //  apiData.map((data=>
                    
                    //  <div key={data.person.id}>
                    //      {data.person.name}
                    //  </div>)
            
            
        }
        return null; //alraedy state is null so incae of null value retun null 

    }
  return (
    <div>
       
        <SearchForm onSearch={onSearch}/>
        <div>{ renderApi()}
        </div>
    </div>
  )
}

export default Home