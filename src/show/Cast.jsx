


import NotImageFound from '../../src/lib/not-image-found.png';
const Cast = ({cast}) => {
  return (
    //destrcusct cast object inside map
    <div>
        {cast.map(({person,character,voice})=>
    (
        <div key={person.id}>
            <div>
                <img src={person.image?person.image.medium: NotImageFound }></img>
                </div>
                <div>
                    {person.name}|{character.name}{voice && '|Voiceover'}
                    </div>
                    </div>
    ))}
     </div>
  )
 
}

export default Cast