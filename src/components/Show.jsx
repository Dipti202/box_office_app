
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. 
//Child routes inherit all params from their parent routes. 
//here access showid by using useparam hook
import { useParams } from "react-router-dom"
const Show = () => {
    const {showId}=useParams() //destraucting para into showid
console.log(showId)
  return (
    <div>Show page for show {showId}</div>
  )
}

export default Show