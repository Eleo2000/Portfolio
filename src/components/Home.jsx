import { useEffect } from 'react';
import '../style/home.css'

const Home = (props) => {
    let content = {
        EN: {
            intro: "Hi, I'm Eleo",
            info:"developer & designer"
        },
        FR: {
            intro: "Salut, je suis Eleo",
            info:"développeur & designer"
        }
      };
      
      props.language === "FR"
        ? (content = content.FR)
        : (content = content.EN);
    
    //API observer
    useEffect(()=>{
        const ratio=.1
        const el = document.querySelector('.Home')
        const options = {
            root: null,
            rootMargin:'0px',
            threshold: .1
        }

        const handleIntersect = function (entries, observer) {
            entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
                //Reveal
                    document.querySelector('.intro').classList.add('r-active')
                    document.querySelector('.info-spec').classList.add('r-active')
                    document.querySelector('.colors ').classList.add('r-active')
                    document.querySelector('.photo-Home').classList.add('r-active')
            
                // observer.unobserve(entry.target)
            }else {
                
            }
            });
        }

    const observer = new IntersectionObserver(handleIntersect, options); 
    observer.observe(el)


    },[])


    return(
        <>
        <div className="Home">
            <div style={{
                backgroundImage : 'url(assets/Leo.png)'
            }} className="photo-Home r-bot-top d--1"></div>
            <div className="content-home">
                <div className="intro r-left-right d-0">{content.intro}</div>
                <div className="info-spec r-right-left d-1">{content.info}</div>
                
            </div>
            <div className="colors r-bot-top">
            <div className="color-blue color"></div>
            <div className="color-red color"></div>
            
        </div>
        </div>
        
    </>
    )
}

export default Home