//make show api data logic isolated

import ShowCard from "./ShowCard"


const ShowGrid = ({shows}) => {
  return (
    <div>    { shows.map(data=>( //use /not-image-found.png' as place holder incase any data has no image
        <ShowCard key={data.show.id} name={data.show.name} image={data.show.image?data.show.image.medium:'/not-image-found.png'}
        summary={data.show.summary}
        id={data.show.id}/>))
        //  <div key={data.show.id}>  
        //                 {data.show.name}
        //             </div>))
        //insted of div use custom card to giv styling and isolated logic
    }
    </div>
  )
}

export default ShowGrid