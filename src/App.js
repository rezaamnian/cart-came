import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Game from './camponent/Game';
const aryimg1=[
  {"src":"/img/aks2.jpg",mach:false},
  {"src":"/img/aks4.jpg",mach:false},
  {"src":"/img/arsenal.jpg",mach:false},
  {"src":"/img/liverpol.jpg",mach:false},
  {"src":"/img/chelsi.jpg",mach:false},
  {"src":"/img/mancity.jpg",mach:false}
]
function App() {
  const[chos1,setchos1]=useState(null);
  const[chos2,setchos2]=useState(null);
 const[dis,setdis]=useState(false);
  const [b,setb]=useState([]);
  const [aryimg5,setaryimg]=useState([]);
  const[imgadres,setimgadres]=useState(true);
  let [term,setterm]=useState(0);
  const aryadd=()=>{
    const aryimg2=[...aryimg1,...aryimg1];
    const aryimg3=aryimg2.sort(()=>{return Math.random()-.5});
    const aryimg4=aryimg3.map((c)=>({...c,id:Math.random()}));
    console.log(aryimg4);
    setaryimg(aryimg4); 
    setterm(0);
  }  
 
  const wech=(s)=>{
    chos1 ?setchos2(s) :setchos1(s);
   
  }

  useEffect(()=>{aryadd()},[])
 

useEffect(()=>{
  if(chos1 && chos2){
  setdis(true);

    console.log("ok");
     if(chos1.src===chos2.src){
      console.log("barabar");
      setaryimg(eleman=>{
        return eleman.map((v1)=>{
          if(v1.src===chos1.src){
            return {...v1,mach:true};
          }

          else{
            return v1;
          }
        })
    
      })
     
     reset();
     }
     else{
    setTimeout(() => {
      reset();
    }, 1000);
      
     }
     

  }


},[chos1,chos2]


)

console.log(aryimg5);

const reset=()=>{
  setchos2(null);
  setchos1(null);
  setterm(x=>x+1);
  setdis(false);
}

useEffect(()=>{
if(term>6){
  aryadd();
  setterm(0);
}
},[term])
  return (
    <div className="App">
    <h1>game carts</h1>
    <button onClick={aryadd}>ary add</button>   
      <div className='game'>
      {
       aryimg5.map((p)=>(
        <Game key={p.id} d={p} wech={wech}  
        rotat={p===chos1 || p===chos2 ||p.mach}
        dis={dis}
        >

        </Game>

       ))

      }
      
      </div>
     
      <h1>term:{term}</h1>
      
      </div> 
    
  );
}

export default App;
