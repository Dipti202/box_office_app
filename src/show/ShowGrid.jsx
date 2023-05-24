//make show api data logic isolated
import NotImageFound from '../../src/lib/not-image-found.png'
import ShowCard from "./ShowCard"
import  { FlexGrid } from "../components/common/FlexGrid"
import { useStartShows } from "../lib/StartShows"
const ShowGrid = ({shows}) => {
  
  const[startShows,dispatchAction]=useStartShows()
// this button handler method is used to  check id show id is inculed in array means already show started
//will get clicked show id and determine show is start or not.otherwise check if condition . acton mehod
  const onStartClickMe=(showId)=>{
    const isStart=startShows.includes(showId)// get show id and inclue in array
    if(isStart){
      dispatchAction({type:'UNSTART',showId})
    }
    else
    {
      dispatchAction({type:'START',showId})

    }

  }

  return (
    // <div>
    <FlexGrid> { 
      shows.map(data=>( //use /not-image-found.png' as place holder incase any data has no image
        <ShowCard key={data.show.id} name={data.show.name} 
        image={data.show.image?data.show.image.medium:NotImageFound}
        summary={data.show.summary}
        id={data.show.id}
        onStartClickMe={ onStartClickMe}
        isStart={startShows.includes(data.show.id)}
        />))
        //  <div key={data.show.id}>  
        //                 {data.show.name}
        //             </div>))
        //insted of div use custom card to giv styling and isolated logic

   }
   </FlexGrid>   
  )
}

export default ShowGrid