import React from 'react'
import { Link } from 'react-router-dom'



const bgstyle1={
  backgroundImage: "url('/bg.jpg')",
  width:"100%",
  height:"100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Home = () => {
  return (
    <div class="main">
    <div class="table" style={bgstyle1}>
      <div class="add">
      <img class="logo" src="/logo2.png"/>
      <Link to="/add"><button>ADD RECIPE</button></Link>
      </div>
    </div>
    </div>
  )
}

export default Home
