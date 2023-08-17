import { useEffect, useState } from 'react';
import './App.css';
import {Auth} from "./components/auth";
import {db} from "./config/firebase";
import {getDocs,collection} from "firebase/firestore"

function App() {
  const [movies,getMovies]=useState([]);

  const moviesCollectionRef=collection(db,"movies");

  const getList=async()=>{
    try{
      const data= await getDocs(moviesCollectionRef);
      console.log(data);
      const filtered=  data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id,
      }));

      getMovies(filtered);

    }catch(err){
      console.error(err);
    } 
  }

  useEffect(()=>{
    getList();
  },[]);

  return (
    <div className="App">
      <Auth/>

      <div>
        
      </div>
      
      <div>
        {
          movies.map((movie)=>(
            <div style={{border:"3px solid black",margin:"5px"}}>
                <h1 style={{color:movie.oscar?"green":"black"}}>{movie.title}</h1>
                <h3>{movie.released}</h3>
            </div>
            
          ))
        }
      </div>
    </div>
  );
}

export default App;
