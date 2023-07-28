import React, { useEffect } from 'react'
import { useSearchParams,useParams } from 'react-router-dom'
function Routing() {
    const [searchparams,setSearchparams]=useSearchParams();   //usesearchparams is a hook
    // console.log([...searchparams.entries()])
    useEffect(()=>{
      setSearchparams({search:"abc"})
    },[])
  return (
    <>
    <h1>routing</h1>
    <h2>{searchparams.get('search')}</h2>
    </>
  )
}

export default Routing