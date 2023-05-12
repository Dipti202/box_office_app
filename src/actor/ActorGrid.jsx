
import ActorCard from "./ActorCard"
const ActorGrid = ({actors}) => {
  return (
    <div>
          {actors.map(data=>(
            <ActorCard key={data.person.id} name={data.person.name}
            image={data.person.image?data.person.image.medium:'/not-image-found.png'} 
          country={data.person.country?data.person.country.name:null}
            gender={data.person.gender}
        deathday={data.person.deathday}
        birthday={data.person.birthday}
          />
              ))}
                  </div>
                   
                    // <div key={data.person.id}>
                    //     {data.person.name}
                    // </div> */}
                  
  
   
  )
}

export default ActorGrid