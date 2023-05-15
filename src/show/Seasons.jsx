//create seasons and cast file to display data on u


//season i s an array. so used length which means no of element ==no of seasons items
const Seasons = ({seasons}) => {
  return (
    <div>
        <div>
            <p>
                {seasons.length}
            </p>

<p>
    total no of episodes :- {seasons.reduce((sum,sea)=>sum+sea.episodeOrder,0)}
</p>
            {/* //we have seasons array so need to calculate no of episode in particular seasons use reduce
       //we will reduce all seaons array in number and basically loop on each element number and
       //sum up episode order and return sum+season episode order. sea is current array */}
     
        <div>
            {seasons.map(sea=>(<div key={sea.id}>
                <p>Seasons  {sea.number}</p>
                <p>Episodes  {sea.episodeOrder}</p>
                <div>
                Aired  {sea.premiereDate}--{sea.endDate}
                </div>
                </div>
                ))}
        </div>
    </div>
    </div>
  )
}

export default Seasons