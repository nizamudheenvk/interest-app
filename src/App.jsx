

import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'
function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)

  const [invalidPrinciple,setInvalidPrinciple]=useState(false)
  const [invalidRate,setInvalidRate]=useState(false)
  const [invalidYear,setInvalidYear]=useState(false)


  const validateInputs = (inputTag)=>{
    console.log(typeof inputTag);
    const{name,value} = inputTag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name=="rate"){
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate
        (true)
      }
  }else if(name=="year"){
    setYear(value)
    if(!!value.match(/^\d*\.?\d+$/)){
      setInvalidYear(false)
    }else{
      setInvalidYear(true)
    }
}
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("inside handle calsulatior");
    if(principle&&rate&&year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Myre please fill in the form")
    }
    
  }
  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }



  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>Simple Interest Calculator</h3>
      <p>Calculate your simple interest</p>
      <div className="bg-warning p-5 text-center rounded">
        <h1>₹ {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>
   
      <form className='mt-5'>
           {/* principle */}
        <div className='mb-3'>
        <TextField value={principle||""} name='principle'  onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label=" ₹ Principle Amount" variant="outlined" />
        </div>
        {/* invaliud principle */}
       { invalidPrinciple && <div className="mb-3 text-danger fw-bolder">
          invalid principle Amount!!!
        </div>}

        {/* Rate */}
      
        <div className='mb-3'>
        <TextField value={rate||""}  name='rate' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label=" ₹ Rate" variant="outlined" />
        </div>
         {/* invaliud Rate */}
       { invalidRate && <div className="mb-3 text-danger fw-bolder">
          invalid principle Rate!!!
        </div>}

         {/* Time*/}
      
        <div className='mb-3'>
        <TextField value={year||""}   name='year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="🕦 Time Period" variant="outlined" />
        </div>
         {/* invalid time */}
       { invalidYear && <div className="mb-3 text-danger fw-bolder">
          invalid principle time period!!!
        </div>}
        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple||invalidRate||invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
        <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} >Reset</Button>
        </Stack>
      </form>
      </div>
    </div>
  )
}


export default App

