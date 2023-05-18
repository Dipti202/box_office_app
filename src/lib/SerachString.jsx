import { useEffect, useState } from "react"
const usePersistState=(initialState,sessionStorageKey)=>
{
    const[state,setState]=useState(()=>
    {
        const persistValue=sessionStorage.getItem(sessionStorageKey)// check datad inside ls and convert into string because ls works with string
        return persistValue?JSON.parse(persistValue):initialState
    })
    useEffect(()=>
    {
        sessionStorage.setItem(sessionStorageKey,JSON.stringify(state))
    },[state,sessionStorageKey]) 
    return[state,setState] }

export const useSearchString=()=>
{
    return usePersistState('',"searchString")//empty string and storage key
}