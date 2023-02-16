import { useEffect, useState } from "react";
import Cubeloader from "./mini-components/CubeLoader";


const Slide = (props) =>{
          const [loaded , setLoaded]=useState(false)
          
          const content = props.multimed.filter(multi => multi.id === props.value);

          const [test , setTest]=useState(content[0].src)

          const [nb_active , setNb_active] = useState(0)

          function testaa(){
          const testa = (props.multimed.filter(multi => multi.id === props.value).map((item,id) => (
                  <>
                  
                      <div  style={{
                        backgroundImage : `url(${item.src_mini})`,
                        backgroundRepeat : 'no-repeat',
                        backgroundSize : '200%',
                        backgroundPosition : 'center'
                      }}
                        key={id} id={id}  className={`mini-c mini-c${id}`} >
                          <div className="f-black"></div>

                      </div>
                    </>
                  )))
                
            return(
              testa
            )
          }
          
          useEffect(() => {
            document.querySelector('body').style.overflow='hidden'

            if(loaded ===false){
              setTimeout(() => {
                setLoaded(true)
              }, 200);

            }else{
            
            //mini-slide
            const a = document.querySelectorAll('.mini-c')
            const filter_b = document.querySelectorAll('.f-black')
            let nb = 0;
            
            a[0].classList.add("activee")
            filter_b[0].style.backgroundColor='rgba(0, 0, 0, 0)';
            //condition onclick el slide
            a.forEach((el,id) => {
              el.onclick = ()=>{

                a.forEach((e,i) => {
                  e.classList.remove("activee");
                  filter_b[i].style.backgroundColor='rgba(0, 0, 0, 0.479)';
                  
                });
                filter_b[id].style.backgroundColor='rgba(0, 0, 0, 0)';
                el.classList.add("activee");
                
                nb=id
                setNb_active(nb)
                setTest(content[nb].src)
                
              }
            });

            
          }
            
          }, [loaded]);
          
        return(
          <div  className="back" >
          {(loaded)?(
          <>
          
            
            
            <div className='content'>
            <div className='quit' onClick={()=>(props.quit())}>X</div>
              {(content[nb_active].type !=='video' ) ?( <img className='show-content' src={test} />)
                               : (<video className='show-content' autoPlay src={test} controls poster="sintel.jpg"   />)}
             
            </div>
    
            <div className='mini-content'>
              
              
              {
                (
                testaa()
                )
              }
              
            </div>
            

          
          </>):(
          <>
        
            <div className='content'>
            
            <Cubeloader/>
            </div>
    
            <div className='mini-content'>
           
             <div  className={`mini-c `} ></div>
             <div  className={`mini-c `} ></div>
             <div  className={`mini-c `} ></div>
             <div  className={`mini-c `} ></div>
             
            </div>
       
          </>)}
          </div>
          
        ) 
}

export default Slide