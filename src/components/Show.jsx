
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
//Child routes inherit all params from their parent routes. 
//here access showid by using useparam hook
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze"
const Show = () => {
    const {showId}=useParams() //destraucting para into showid
    console.log(showId)
    //crtae state to get data inside state
    const [showData,setFetchData]=useState(null) 
    // if instead of data get any error
    const [error,setFetcherror]=useState(null) 
    useEffect(()=>{
      //asyc is call back fun used inside in use effect
async function fetchData(){
  try{
    const response= await getShowById(showId)
    console.log(response)
    setFetchData(response)
  }  catch(err)
    {
      setFetcherror(err)
    }

}
fetchData()
    },[showId]) //have to define hook depencies because show id is dynamic if not supply then logic will run only once not for re-run

    if(showData)
    {
      return<div> got data :
      {showData.name}</div>
    }
    if( error)
    {
      return<div>{error.message} </div>
    }
    return <div> data is loading </div>

 
}

export default Show