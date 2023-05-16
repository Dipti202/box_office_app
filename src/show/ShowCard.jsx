//show card for style to data instead of simple div
import {Link} from 'react-router-dom'

function ShowCard({name ,image,summary,id}) {
    const summaryArray=summary?summary.split(' ').slice(0,20).join(' ').replace(/<.+?>/g,' '):"no discription availabe"
//  Summary is in html tag and this string too long. So transform into short summary by using string array
//     First transform in to array by using split method (' ')  by empty spaces then called slice(0,20) method with 20 elements
//  split into string array of 20 elemnets and join all elemnts with join method
// Join all array elemnt with empty string using join method join('')

// But this string still in html tag so replace this html tag by using replace method.in relace method will use regular express to replace unnessary character to empty string basicalyy strip them away

  return (
    <div>
    <h1>{name}</h1>
    <div>
    <img src={image}></img>
    </div>
    <p>{summaryArray}</p>
    <div>
     
        {/* <Link to={`/show/${id}`} >Read More</Link> */}
        {/* if we want to opeen something in new tab that is not related to client side so 
        here we use <a> </a> will use to navigate.  */}

<a href={`/show/${id}`} target='_blank'  rel="noreferrer" >Read More</a>        <button type="button">Start Me</button>
    </div>
    </div>

  )
}

export default ShowCard