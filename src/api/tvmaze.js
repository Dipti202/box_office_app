const BASE_URL="https://api.tvmaze.com";   // base url store in a variable to 


const apiGet=async(queryString)=>{
  // throw  new Error ("somethng is wrong");
    const response=await fetch(
        `${BASE_URL}${queryString}` // this work like this url `https://api.tvmaze.com/search/shows?q=${initialSearch}`
    )
    const body= await response.json();
    return body;
    }
export const searchShows=(query)=>apiGet(`/search/shows?q=${query}`)
// serach shows is replacement of this string 'search/shows?q=${initialSearch}`
// now no need to send this url string as argument to directly 

export const searchActor=(query)=>apiGet(`/search/people?q=${query}`)

export const getShowById=(showId)=>apiGet(`/shows/${showId }`)