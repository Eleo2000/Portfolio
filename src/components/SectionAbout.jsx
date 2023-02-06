import { memo } from 'react'
import '../style/about.css'

const SectionAbout = (props) => {

    let content = {
        EN: {
            title: "ABOUT ME",
            about:"Fascinated by the world of technology and design, so I extrapolate my creativity through these areas. And also I really like to draw."
        },
        FR: {
            title: "A PROPOS DE MOI",
            about:"Passionné par le monde de la technologie et du design, j'extrapole donc ma créativité à travers ces domaines. Et aussi, j'aime beaucoup dessiner."
        }
      };
      
      props.language === "FR"
        ? (content = content.FR)
        : (content = content.EN);

    return(
        <div className="section-about section">
            <div className="titra-about titra">
                <div className="logo-about logoo">
                    <svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="about">
                        <rect id="Rectangle 46" x="8" y="5" width="4" height="25" fill="#D9D9D9"/>
                        <rect id="Rectangle 49" width="4" height="35" fill="#D9D9D9"/>
                        <rect id="Rectangle 47" x="16" y="10" width="4" height="14" fill="#2AAAF1"/>
                        </g>
                    </svg>

                </div>
                <div className="section-about-title title"> {content.title} </div>
            </div>
            <div className="content-about">{content.about}</div>
        </div>
    )
}

export default memo(SectionAbout)