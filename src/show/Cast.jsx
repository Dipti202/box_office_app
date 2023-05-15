

const Cast = ({cast}) => {
  return (
    //destrcusct cast object inside map
    <div>
        {cast.map(({person,character,voice})=>
    (
        <div key={person.id}>
            <div>
                <img src={person.image?person.image.medium:'/not-image-found.png'}></img>
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