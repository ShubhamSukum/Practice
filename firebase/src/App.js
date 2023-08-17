import { useEffect, useState } from 'react';
import './App.css';
import {Auth} from "./components/auth";
import {db,auth} from "./config/firebase";
import {getDocs,collection,addDoc,deleteDoc,updateDoc,doc} from "firebase/firestore"

function App() {
  const [movies,getMovies]=useState([]);
  const [title,setTitle]=useState("");
  const [released,setReleased]=useState(0);
  const [oscar,setOscar]=useState(false);

  const [up,setUp]=useState("");

  const moviesCollectionRef=collection(db,"movies");

  useEffect(()=>{
    getList();
  },[]);

  const getList=async()=>{
    try{
      const data= await getDocs(moviesCollectionRef);
      // console.log(data);
      const filtered=  data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id,
      }));

      getMovies(filtered);

    }catch(err){
      console.error(err);
    } 
  }

  const onSubmitMovie=async()=>{
      await addDoc(moviesCollectionRef,{
        title:title,
        released:released,
        oscar:oscar,
        userId:auth?.currentUser?.uid,   
      })

      getList();  
  }

  const deleteMovie=async(id)=>{
    const movieDoc=doc(db,"movies",id)
    await deleteDoc(movieDoc);
    getList();  
  }

  const updateMovie=async(id)=>{
    const movieDoc=doc(db,"movies",id)
    await updateDoc(movieDoc,{title:up});
    getList();  
  }

  

  return (
    <div className="App">
      <Auth/>

      <div style={{border:"3px solid black",margin:"5px",padding:"10px"}}>
        <h1>Movie CRUD</h1>
        <input placeholder='Title' type='text' onChange={(e)=>{setTitle(e.target.value)}}/>
        <input placeholder='Released On' type='number' onChange={(e)=>{setReleased(Number(e.target.value))}}/>
        <label><input type='checkbox' checked={oscar} onChange={(e)=>setOscar(e.target.checked)}/>Recieved Oscars</label>
        <br/><br/>

        <button onClick={onSubmitMovie}>Submit</button>
      </div>
      
      <div>
        {
          movies.map((movie,index)=>(
            <div style={{border:"3px solid black",margin:"5px"}} key={index}>
                <h1 style={{color:movie.oscar?"green":"black"}}>{movie.title}</h1>
                <h3>{movie.released}</h3>
                <button onClick={()=>{deleteMovie(movie.id)}} style={{padding:"3px",margin:"5px"}}>Delete</button>
                <input type='text' placeholder='Update Title' onChange={(e)=>setUp(e.target.value)}/>
                <button onClick={()=>{updateMovie(movie.id)}} style={{padding:"3px",margin:"5px"}}>Update</button>

            </div>
            
          ))
        }
      </div>
    </div>
  );
}

export default App;
