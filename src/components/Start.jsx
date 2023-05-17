// instead call usePersist reducer again-gain need to write all logic ,so we will crate a funtion inside statrtshows compnet and call this funtion

import { useStartShows } from "../lib/StartShows";
const Start=()=>{
    const[startedShows]=useStartShows()
    return <div>starred page {startedShows.length}</div>

}