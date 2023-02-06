
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Loading from './components/Loading';
import LoadingScreen from './components/LoadingScreen';
import SectionAbout from './components/SectionAbout';
import SectionProject from './components/SectionProject.jsx';
import SectionSkill from './components/SectionSkill';
import SectionTop from './components/SectionTop';
import Slide from './components/Slide';

const projets =[
  {id : 0 ,title : "Frontend Awards 2022" , img:"assets/content-0/mini/0.png"},
  {id : 1 ,title : "Icons for hospital" ,img:"assets/content-1/mini/1.png"},
]
//A regler mampiasa filter ato ngamban xD

//object.id.
const multimed =[
  { id : 0 , src : "assets/content-0/0.mp4" , src_mini : "assets/content-0/mini/0.png", type :"video"},
  { id : 0 , src : "assets/content-0/1.png" , src_mini : "assets/content-0/mini/1.png", type :'image' },
  { id : 0 , src : "assets/content-0/2.png" , src_mini : "assets/content-0/mini/2.png", type :'image' },
  { id : 0 , src : "assets/content-0/3.png" , src_mini : "assets/content-0/mini/3.png", type :'image' },
 
  { id : 1 , src : "assets/content-1/1.png" , src_mini : "assets/content-1/mini/1.png" ,type :'image'},
  { id : 1 , src : "assets/content-1/2.png" , src_mini : "assets/content-1/mini/2.png" ,type :'image'},
  { id : 1 , src : "assets/content-1/3.png" , src_mini : "assets/content-1/mini/3.png" ,type :'image'},
  { id : 1 , src : "assets/content-1/4.png" , src_mini : "assets/content-1/mini/4.png" ,type :'image'},
  { id : 1 , src : "assets/content-1/5.png" , src_mini : "assets/content-1/mini/5.png" ,type :'image'},
  { id : 1 , src : "assets/content-1/6.png" , src_mini : "assets/content-1/mini/6.png" ,type :'image'},
  { id : 1 , src : "assets/content-1/7.png" , src_mini : "assets/content-1/mini/7.png" ,type :'image'},
]

function App() {
  const [value , setValue]=useState("");
  const [tab , setTab] = useState([])

  const [loading ,setLoading] = useState(true);

  //language_part
  const [language , setLanguage] = useState("EN");
  function handleSetLanguage(value){
    setLanguage(value);
  }
 
  function attrib_classes(a){
    setTab(()=>a)
    console.log(tab);
  }

  function show_project(id) {
    setValue(id);
  }
  function quit(){
    document.querySelector('body').style.overflow='initial'
    setValue('');
  }
  function setLoad(){
    setLoading(false);
  }
  
  return (
    (loading === false) ?(
      <>
      {(value!=='')&&(
      
        <Slide   multimed={multimed} value={value}  quit={quit} attrib_classes={attrib_classes} />
        
      )}
      <div className="App">
        <SectionTop language ={language} handleSetLanguage={handleSetLanguage} />
        <SectionAbout language ={language} />
        <SectionSkill language ={language} />
        <SectionProject language ={language} show ={show_project} projets={projets} />
        <Footer/>
      </div>
    </>
    ):(
      <Loading setLoad={setLoad}/>
    )
    

  );
}

export default App;
