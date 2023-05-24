// instead call usePersist reducer again-gain need to write all logic ,so we will crate a funtion inside statrtshows compnet and call this funtion
import {useQuery} from '@tanstack/react-query'
import { useStartShows } from "../lib/StartShows";
import ShowGrid from '../show/ShowGrid';
import { getShowByIds } from '../api/tvmaze';
import {TextCenter} from '../components/common/TextCenter'
const StartPage=()=>{
    const[startedShowIds]=useStartShows();
    const{data:staredShows, error:startError}=useQuery({
        queryKey:['starred',startedShowIds],
        queryFn:()=>
        getShowByIds(startedShowIds).then
        (result=>
            result.map(show=>({show}))),// here to match show grid props structure will apply map() to get show element from result array
        refetchOnWindowFocus:false
    })
    
    if(staredShows?.length===0)
    {
        return <TextCenter>no shows were started</TextCenter>
    }
    if(staredShows?.length>0)
    {
        return <ShowGrid shows={staredShows} />
    }
    if(startError)
    {
        return <TextCenter>error occured: {startError.message}</TextCenter>
    }

    return <TextCenter>page is loading</TextCenter>

}
export default StartPage