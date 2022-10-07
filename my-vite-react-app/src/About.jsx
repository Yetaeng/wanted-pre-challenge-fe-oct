import React from 'react';
import { useRouter } from './Root';

const About = () => {
  window.onpopstate = function(e) { 
    console.log(`${JSON.stringify(e.state)} | ${location.origin} | ${location.pathname}`);
  }
  
  return (
    <>
      <h1>About</h1>
      <button onClick={() => useRouter(2, '/')}>go to main</button>
    </>
  )
};

export default About;