// import React from 'react'
// import { useNavigate } from 'react-router-dom'

import About from "./About";

// const Home = ({name}) => {
//   const navigate = useNavigate();
//   const handleClick = () =>{
//     navigate('/about');

//   return (
//     <div>
//       <h1>Name:{name}</h1>
//       <button onClick={handleClick}>Go to about page</button>
//     </div>
//   )
// }
// }

// export default Home

const Home = (props) => {
  const Home = ({name})
  const handleclick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Name : {props.name}</h1>
      <button onClick={handleclick}>Go to about page</button>
      <About name={name}/>
      <About name={name}/>
      <About name={name}/>

    </div>
  );
};

export default Home;