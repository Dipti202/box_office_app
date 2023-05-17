import { useEffect, useReducer } from "react"

// usePersist is custome hook to write advanced logic whic persit state in local storage.
//we use temparay local storage db to avoid lost data sitution incase of refresh page,close browser and close tab
//we can also persist data eith use state but in this case logic will (data hiding) not protected .so to conceal logic will use local storage to persit data
//in this custome hook we want to retain the api of bulit user reducer to make this hook re-usable  and avoid tight coupling
//so make ruse reducer abstrct and re-usable o handle multiple use cases
const usePersistReducer=(reducer,initialState,localStorageKey)=>{
    const[state,dispatch]=useReducer(reducer,initialState,(inital)=>{
      
      //inital()=it is a initializer function is used when page will refresh and data will retrived from local storage and use data initial state.use-effect hook not right option because it will update every compnent mount life cycle and we need data only once 
      //because inital state must be already the value from ls
      // so inital() is thrd argument which runs only once to initialize intial state
      // initial state whaterver pass in reducer argumnet , availble as argumnet in initialzer fuction
        const persistValue=localStorage.getItem(localStorageKey)// check datad inside ls and convert into string because ls works with string
        return persistValue?JSON.parse(persistValue):inital
    })
    useEffect(()=>
    {
        localStorage.setItem(localStorageKey,JSON.stringify(state))
    },[state,localStorageKey]) //here useeffect use to sync with local storage db , because wheever any changes in state or local key this call back function will call and run logig whwn somthing is changes 
    //state=value and local storage key=key
    // any changes will upade in ls because eefect allo compnent update life cyle evey time and need to sync with lS for everyupdation
return[state,dispatch] 
//retun array of    exact elemnets .so our persist hook resembles with original use-reducer hook
}

// thsi function used to upadte dsatate as per dispacthed action and return update satate to reducer
const StartedShowReducer=(currentStarted,action)=>{
    switch(action.type)
    {
        case 'START':
            return currentStarted.concat(action.showId)
    case 'UNSTART':
        // filer is loke map fuction used to write logic to filter elemnts 
        //means if inside array elements alyredy exist then remove it and give new array
        //otherwise element not exist add it into  old array and give new array
        return currentStarted.filter(
            showId=>showId!==action.showId
        )
        default:
            return currentStarted
        }

}
// crate new hook to reuse in any page to use persist hook logic
// this hook call persist reducer and return whatever persist hook return
export   const useStartShows=()=>
{
   return usePersistReducer(StartedShowReducer,[],'startShowKey')}

