import '../style/loading.css'
import { useEffect } from "react"
import Cubeloader from './mini-components/CubeLoader';

const Loading = (props) => {

    useEffect(()=>{
            
            setTimeout(() => {

                document.querySelector('.mini-container').style.animation = 'disap-cube 0.25s ease-in-out forwards';
                
            }, 700);
            
        
            setTimeout(() => {

                document.querySelector("#l0").style.animation="fondXdL0 .7s ease-out  forwards";
                document.querySelector("#r0").style.animation="fondXdR0 .7s ease-out  forwards";
                document.querySelector("#l1").style.animation="fondXdL0 .7s ease-out 0.002s forwards";
                document.querySelector("#r1").style.animation="fondXdR0 .7s ease-out 0.002s forwards";
                
        
            },1200);
        
            setTimeout(() => {
                
                //misy etat miova ato xD
                props.setLoad();
            
            },2000);
            
        
        
    })

    return(
        <>
        <div className="loaderXd">

        <Cubeloader/>
        

        <svg className="fondOpening" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1442.5 1024"><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="Calque_2-2" data-name="Calque 2"><g id="Calque_1-2-2" data-name="Calque 1-2"><rect id="l1" x="3.29" width="719.71" height="1024" fill="#217aac"/><rect id="r1" x="722.5" width="720" height="1024" fill="#dbdbdb"/><rect id="r0" x="722.5" width="720" height="1024" fill="#090f22"/><rect id="l0" width="723" height="1024" fill="#090f22"/></g></g></g></g></svg>
        </div>
       

        
        </>
    )
}

export  default Loading