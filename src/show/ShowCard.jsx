//show card for style to data instead of simple div
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {SearchImgWrapper ,SearchCard } from '../components/common/SearchCard'
function ShowCard({name ,image,summary,id, onStartClickMe,isStart}) {
    const summaryArray=summary?summary.split(' ').slice(0,20).join(' ').replace(/<.+?>/g,' '):"no discription availabe"
//  Summary is in html tag and this string too long. So transform into short summary by using string array
//     First transform in to array by using split method (' ')  by empty spaces then called slice(0,20) method with 20 elements
//  split into string array of 20 elemnets and join all elemnts with join method
// Join all array elemnt with empty string using join method join('')

// But this string still in html tag so replace this html tag by using replace method.in relace method will use regular express to replace unnessary character to empty string basicalyy strip them away

  return (
    <SearchCard>
    <div>
    <h1>{name}</h1>
    <SearchImgWrapper>
    <div>
    <img src={image}></img>
    </div>
    </SearchImgWrapper>
    <p>{summaryArray}</p>
    
     
        {/* <Link to={`/show/${id}`} >Read More</Link> */}
        {/* if we want to opeen something in new tab that is not related to client side so 
        here we use <a> </a> will use to navigate.  */}
<ActionSection>
<Link to={`/show/${id}`} target='_blank'  rel="noreferrer" >Read More</Link>  
< StarBtn>
     <button type="button" onClick={()=> onStartClickMe(id)}>{isStart?'UNSTART':'START'}</button>
     </StarBtn> 
     </ActionSection>
    </div>
    </SearchCard>
  )
}

export default ShowCard;
const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;