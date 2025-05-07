import React from 'react'

function Home({Page,name}) {
  return (
    <>
      <h1>This is Home</h1>
      <h2>{Page}</h2>
      <p>The person name is {name.name1} and he is {name.des}</p>

    </>
  )
}

export default Home
