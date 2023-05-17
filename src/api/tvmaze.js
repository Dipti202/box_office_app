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

//export const getShowById=(showId)=>apiGet(`/shows/${showId }`)

//embeded to get and load more data 
// to add emmebed in url. needa to modify function enbed season and cast 

export const getShowById=(showId)=>apiGet(`/shows/${showId }?
embed[]=seasons&
embed[]=cast`)
export const getShowByIds= async(showIds)=>
// here all shows request not depended to each other so try to make
//  fast assp send multiple request at same time, will use promise all method
// here we map  each show id to a  by using getsgowid() and get array of promise  
{const promises=showIds.map(showId=>apiGet(`/shows/${showId }`))
 // this line means we have an array of promise  and using promise all () resolve an array of promise 
  // handled in paralle  at once(means array of promise request send to api at once time
  // because on tv maze we have not any endpoint to grab multiplae shows at once. so 
  //need to send multiple request to api.)

const result=Promise.all(promises) //array of promise means-all([promise1,promis2])

return  result // array of promise will retrun array of resove  result[vale1,value2]
 
} 