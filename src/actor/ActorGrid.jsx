import  { FlexGrid } from "../components/common/FlexGrid"
import ActorCard from "./ActorCard";
//import NotImageFoundSrc from '../../lib/not-image-found.png';
import NotImageFound from '../../src/lib/not-image-found.png'
const ActorGrid = ({actors}) => {
  return (
    <FlexGrid>
    {/* <div> */}
          {actors.map(data=>(
            <ActorCard key={data.person.id} name={data.person.name}
            image={data.person.image?data.person.image.medium:NotImageFound} 
          country={data.person.country?data.person.country.name:null}
            gender={data.person.gender}
        deathday={data.person.deathday}
        birthday={data.person.birthday}
        id={data.person.id}
          />
              ))}
                  {/* </div> */}
                  </FlexGrid>
                   
                    // <div key={data.person.id}>
                    //     {data.person.name}
                    // </div> */}
                  
  
   
  )
}

export default ActorGrid