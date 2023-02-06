import { useCallback, useEffect, useState } from "react";


const Slide = (props) =>{
          
          const content = props.multimed.filter(multi => multi.id === props.value);

          const [test , setTest]=useState(content[0].src)
          console.log(test);

          const [nb_active , setNb_active] = useState(0)
          function testaa(){
          const testa = (props.multimed.filter(multi => multi.id === props.value).map((item,id) => (
                    <div  style={{
                      backgroundImage : `url(${item.src_mini})`,
                      backgroundRepeat : 'no-repeat',
                      backgroundSize : '200%',
                      backgroundPosition : 'center'
                    }}
                      key={id} id={id}  className={`mini-c mini-c${id}`} ></div>
                  )))
                
            return(
              testa
            )
          }
          
          useEffect(() => {
            document.querySelector('body').style.overflow='hidden'
            const prev = document.querySelector('.prev')
            const next = document.querySelector('.next')
            
            prev.onclick = () => {
              preva()
            }
            next.onclick = () => {
              nexta()
            }

            //mini-slide
            const a = document.querySelectorAll('.mini-c')
            let nb = 0;
            
            a[0].classList.add("activee")
            //condition onclick el slide
            a.forEach((el,id) => {
              el.onclick = ()=>{

                a.forEach(e => {
                  e.classList.remove("activee");
                });

                el.classList.add("activee");
                
                nb=id
                setNb_active(nb)
                setTest(content[nb].src)
                
              }
            });

            function nexta(){
              if(nb===(a.length-1)){
                
              }else{
                a.forEach(e => {
                  e.classList.remove("activee");
                });
                nb++
                setNb_active(nb)
                a[nb].classList.add('activee')
                setTest(content[nb].src)
              }
              
              
            }

            function preva(){
              
              if(nb===0){
                
              }else{

                a.forEach(e => {
                  e.classList.remove("activee");
                });

                nb--;
                setNb_active(nb)
                a[nb].classList.add('activee');
                setTest(content[nb].src)
              }
              
              
            }
            console.log(content);
            console.log( a );
            
          }, []);
          
        return(
          <div  className="back" >
            
            <div className='quit' onClick={()=>(props.quit())}>X</div>
            <div className='content'>
              {(content[nb_active].type !=='video' ) ?( <img className='show-content' src={test} />)
                               : (<video className='show-content' autoPlay src={test} controls poster="sintel.jpg"   />)}
             
            </div>
    
            <div className='mini-content'>
              <div className='prev'> {'<'}</div>
              
              {
                (
                testaa()
                )
              }
              <div className='next'> {'>'}</div>
            </div>
            
          </div>
          
        ) 
    
      
}

export default Slide