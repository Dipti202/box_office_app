
import {Link} from 'react-router-dom'
function ActorCard({name, image,gender,country,deathday, birthday,id}) {

  return (
    <div>
        {/* Inline conditional rendering in jsx
When Use && conditional operator then make sure is a Boolean=ish value

Apply double !! negation for booleanish 
Interpolate gender=`($(gender)`) */}

    <h1>{name}{!!gender && `(${gender})`}</h1> 
    <p>{country?`country from ${country}`:'country is unknown'}</p>


    {!!birthday && <p>Born {birthday}</p>}
    <p>
        {deathday?`Died ${deathday}`:'Alive'}
    </p>
    <div>
        <img src={image}></img>
    </div>
    
    <div>
        {/* <Link to={`/show/${id}`}>Read More</Link> */}
        <a href={`/show/${id}`} target='_blank'  rel="noreferrer" >Read More</a> 
        <button type="button">Start Me</button>
    </div>
    
    </div>
   
  )
}

export default ActorCard