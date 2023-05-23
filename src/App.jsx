
import { HashRouter,  Route,  Routes } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import MainLayout from "./components/MainLayout";
import StartPage from "./components/StartPage";
import { QueryClient,QueryClientProvider,
} from '@tanstack/react-query'
import { GlobalTheme } from "./components/Theme";

//usequery is a data fetching libaray recommded by react team in latest version
// to give solution of react strict  mode render component twice in react when apply use effect
// it provides optimized solution and abstract interface so that we can wrap that functions in hook ,use query and fetch data only once inside 
//components
// Create a client
const queryClient = new QueryClient()

function App() {
  return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
  <GlobalTheme>
  
    <HashRouter>
    <Routes>
    <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/StartPage" element={<StartPage />} />
            </Route>
   
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

   
    </HashRouter>
    </GlobalTheme>
    </QueryClientProvider>

  );
}

export default App;
