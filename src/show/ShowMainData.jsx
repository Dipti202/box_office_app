
const ShowMainData = ({image,name,rating,summary,genres}) => {
  return (

    <div>
      <div >
        <img src={image?image.original:'/not-image-found.png'} alt={name}
        width={200} height={200}></img>
      </div>
        <h1>{name}</h1>

        {/* if avaerge 0 or null display falsy value 'na' */}
        <div>{rating.average || 'N/A'}</div>  
{/*      
     danerous is used to treat html actulay as html by react tag.pass html property as object.up to
      you want to use this property or not because it coantain malicious js*/}
        <div dangerouslySetInnerHTML={{__html:summary}}/>
        {/* genres is an array will use map */}
       <div>
        genres:
      
        <div>
          {genres.map(gen=>(<span key={gen}>{gen} <br></br></span>))}
        </div>

    </div>
   
    </div>
  )
}
export  default ShowMainData