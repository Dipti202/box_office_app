
import {Link} from 'react-router-dom'
function ActorCard({name, image,gender,country,deathday, birthday}) {

  return (
    <div>
        {/* Inline conditional rendering in jsx
When Use && conditional operator then make sure is a Boolean=ish value

Apply double !! negation for booleanish 
Interpolate gender=`($(gender)`) */}

    <h1>{name}{!!gender && `(${gender})`}</h1> 
    <p>{country?`country from ${country}`:'country is unknown'}</p>
    {!!birthday && <p>born {birthday}</p>}
    <p>
        {deathday?`Died ${deathday}`:'Alive'}
    </p>
    <div>
        <img src={image}></img>
    </div>
    
    <div>
        <Link to='/'>Read More</Link>
        <button type="button">Start Me</button>
    </div>
    
    </div>
   
  )
}

export default ActorCard