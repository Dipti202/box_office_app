import NotImageFound from '../../src/lib/not-image-found.png';
import { StarIcon } from '../components/common/StarIcon';
import styled from 'styled-components';
const ShowMainData = ({image,name,rating,summary,genres}) => {
  return (
<MainDataWrapper>
    {/* <div> */}
      <div >
        <img src={image?image.original: NotImageFound} alt={name}
        width={200} height={200}></img>
      </div>
      <DataSection>
        <Headline>
          
        <h1>{name}</h1>
        <div>
        <StarIcon active/>

        {/* if avaerge 0 or null display falsy value 'na' */}
        <span>
        {rating.average || 'N/A'}
        </span>
      </div>  
        </Headline>
{/*      
     danerous is used to treat html actulay as html by react tag.pass html property as object.up to
      you want to use this property or not because it coantain malicious js*/}
        <Summary dangerouslySetInnerHTML={{__html:summary}}/>
        {/* genres is an array will use map */}
       <div>
        genres:
      
        <Genres >
          {genres.map(gen=>(<span key={gen}>{gen} <br></br></span>))}
        </Genres >

    </div>
    </DataSection>
    {/* </div> */}
    </MainDataWrapper>
  )
}
export  default ShowMainData;
const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  .img-wrap {
    width: 275px;
    max-width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
  }
`;

const DataSection = styled.div`
  margin-left: 20px;
  flex: 1;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

const Summary = styled.div`
  color: #5f5f5f;
  line-height: 1.5;
`;

const Genres = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;