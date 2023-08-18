import {useState } from 'react';
import { useEffect} from 'react';
import './App.css';
import {Auth} from "./components/auth";
import {db,auth,storage} from "./config/firebase";
import {getDocs,collection,addDoc,deleteDoc,updateDoc,doc} from "firebase/firestore";
import {ref,uploadBytes} from "firebase/storage";

function App() {
  const [movies,getMovies]=useState([]);
  const [title,setTitle]=useState("");
  const [released,setReleased]=useState(0);
  const [oscar,setOscar]=useState(false);
  const [up,setUp]=useState("");
  const [file,setFile]=useState(null);

  const moviesCollectionRef=collection(db,"movies");

  // console.log(auth?.currentUser?.email);

  useEffect(()=>{

    const getList=async()=>{
      try{
        const data= await getDocs(moviesCollectionRef);
        const filtered=  data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id,
        }));
  
        getMovies(filtered);
  
      }catch(err){
        console.error(err);
      } 
    }

    getList();
  },[moviesCollectionRef]);

  const getList=async()=>{  
    try{
      const data= await getDocs(moviesCollectionRef);
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
    try{
      await addDoc(moviesCollectionRef,{
        title:title,
        released:released,
        oscar:oscar,
        userId:auth?.currentUser?.uid,   
      })

      getList(); 
    }catch(err){
      console.log(err);
    } 
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

  const uploadFile=async()=>{
    if(!file) return;

    try{
      const fileRef=ref(storage,`fireFolder/${file.name}`);
      await uploadBytes(fileRef,file);
    }catch(err){
      console.error(err);
    }
  };

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

                <div>
                  <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
                  <button onClick={uploadFile}>Upload file</button>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
