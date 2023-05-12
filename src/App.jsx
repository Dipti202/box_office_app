
import { BrowserRouter,  Route,  Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/show/:showId" element={<Show/>}>
    
    </Route>
    </Routes>
    {/* Pass showId in url segment.id will changed based on shows clicked
In react router how we do this?
Solution=”:showId—it is called dyanamic url parameter or dymanic url segment—it its something that changes

What ever we type as input is dynamic.we don’t know what kind of data will get in api 
 so think skelton of dynamic data-solution is url dynamic with parameter

:showId is paramtere will be something is dynamic we are taking from url

showId is dynamic segment we gave name it to show id */}

   
    </BrowserRouter>

  );
}

export default App;
