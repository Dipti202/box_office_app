//create seasons and cast file to display data on u

import { styled } from 'styled-components';
//season i s an array. so used length which means no of element ==no of seasons items
const Seasons = ({seasons}) => {
  return (
    <SeasonsWrapper>
    {/* <div> */}
        
            <p>
                {seasons.length}
            </p>

<p>
    total no of episodes :- {seasons.reduce((sum,sea)=>sum+sea.episodeOrder,0)}
</p>
            {/* //we have seasons array so need to calculate no of episode in particular seasons use reduce
       //we will reduce all seaons array in number and basically loop on each element number and
       //sum up episode order and return sum+season episode order. sea is current array */}
     
     <SeasonList>
       
            {seasons.map(sea=>(<div key={sea.id} className='season-item'>
                <div className='left'>
                <p>Seasons  {sea.number}</p>
                <p>Episodes  {sea.episodeOrder}</p>
                </div>
                <div className='right'>
                Aired<strong> {sea.premiereDate}--{sea.endDate}</strong> 
                
                </div>
                </div>
                ))}

   
    </SeasonList>
    </SeasonsWrapper>

  )
}

export default Seasons;
const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;