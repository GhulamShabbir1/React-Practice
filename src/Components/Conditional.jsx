import React from 'react'
const goalDone=()=>{
       alert("Well Done Goal") 
    }

    const notGoal=()=>{
        alert("ohh Miss the Goal")
    }
function Conditional({isGoal}) {
    const goal=isGoal
  return (
    <>
    <h1>
        This Conditional Statement 
    </h1>
    if({goal}){
       alert("Answer is",goalDone()) 
    } else
    {
        alert("Answer is ",notGoal())
    }
    </>
  )
}

export default Conditional