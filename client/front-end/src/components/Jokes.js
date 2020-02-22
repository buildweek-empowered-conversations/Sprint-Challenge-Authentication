import React, {useState, useEffect} from 'react';
import axios from 'axios';
import{ axiosWithAuth} from '../utils/axiosWithAuth';

const Jokes = ()=> {
    const [jokes, setJokes]= useState([]);

    useEffect(()=> {
      axiosWithAuth()
      .get('http://localhost:3300/api/jokes')
       .then(res=> setJokes(res.data) )
       .catch(err => console.log(err));
  
      console.log('JOKER',jokes)
  
  
    },[jokes.length])

   return (
       <div className = 'joke-div'>

{jokes.map(j=> {
        return (
          <>
          <p>{j.joke}</p> 
           </>
        )
      })}
       </div>
   )


}

export default Jokes