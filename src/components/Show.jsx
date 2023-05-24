
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
//Child routes inherit all params from their parent routes. 
//here access showid by using useparam hook
//import { useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze"
import ShowMainData from "../show/ShowMainData"
import Details from "../show/Details"
import Seasons from "../show/Seasons"
import Cast from "../show/Cast"
import { useQuery } from "@tanstack/react-query"
import { styled } from "styled-components"

import { TextCenter } from "./common/TextCenter"
//want to re-use hook logic or extract logic from component then use custome hook
//wrute custom hook top of the file
//const useShowbyId=showId=>{
  //crtae state to get data inside state
  //const [showData,setFetchData]=useState(null) 
  // if instead of data get any error
  //const [error,setFetcherror]=useState(null) 
//   useEffect(()=>{
//     //asyc is call back fun used inside in use effect
// async function fetchData(){
// try{
//   const response= await getShowById(showId)
//   console.log(response)
//   setFetchData(response)
// }  catch(err)
//   {
//     setFetcherror(err)
//   }

// }
// fetchData()
//   },[showId])
//   //this hook will return something which we use at time of calling this hook
//   return {showData,error} // reurn an object
// }
const Show = () => {
    const {showId}=useParams() //destraucting para into showid
    console.log(showId)
    const{data:showData,error:error}=useQuery({
      queryKey:['show', showId],
      queryFn:()=>getShowById(showId), // will return object tht destructing on line 42
      refetchOnWindowFocus:false
    })
   
    // here destruction of return object
    //const {showData,error}=useShowbyId(showId)

//     useEffect(()=>{
//       //asyc is call back fun used inside in use effect
// async function fetchData(){
//   try{
//     const response= await getShowById(showId)
//     console.log(response)
//     setFetchData(response)
//   }  catch(err)
//     {
//       setFetcherror(err)
//     }

// }
// fetchData()
//     },[showId]) //have to define hook depencies because show id is dynamic if not supply then logic will run only once not for re-run

    if(showData)
    {
      return(
        <ShowPageWrapper>
           <BackHomeWrapper>
            {/* when we go back seach data is gone. so box office page need to remmeber
        tha last searsch that we do by ucing link tag. we can also use useNavigate hook in which
        we use button and button handler but in our case link tag is sufficient. for use navigate goto router doc */}
        <Link to='/'> go back to home</Link>
           </BackHomeWrapper>
          
        
        <ShowMainData image={showData.image}
        
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}/>
        <InfoBlock>
        <div>
          <h2>Details</h2>
          <Details 
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network} />
        </div>
        </InfoBlock>
        <InfoBlock>
        <div>
      <h2>Seasons</h2>
      {/* //season is _embeded */}
      <Seasons seasons={showData._embedded.seasons}/>
    </div>
    </InfoBlock>

    <InfoBlock>
    <div>

    <h2>Cast</h2>
      {/* //season is _embeded */}
      <Cast cast={showData._embedded.cast}/>
    </div>
    </InfoBlock>
       </ShowPageWrapper>
       
       )
    }
    if( error)
    {
      return<TextCenter>{error.message} </TextCenter>
    }
    return <TextCenter><div> data is loading </div></TextCenter> 

 
}

export default Show
const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;