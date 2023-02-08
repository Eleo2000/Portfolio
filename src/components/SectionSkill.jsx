import { memo } from 'react'
import '../style/skill.css'
import Lista from './mini-components/Liste'
const SectionSkill = (props) => {
    let skill={
        dev: [
            'HTML/CSS',    
            'Javascript',
            'React'
        ],
        des: [
            'illustrator',
            'Photoshop',
            'Figma'
        ]
    }

    let content = {
        EN: {
            title: "MY SKILLS",
            dev:"Development",
            des:"Design"
        },
        FR: {
            title: "MES COMPETENCES",
            dev:"Développement",
            des:"Design"
        }
      };
      
      props.language === "FR"
        ? (content = content.FR)
        : (content = content.EN);


    return(
        <div className="section-skill section">
            <div className="titra titra-skills">
                <div className="logo-skills logoo">
                    <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="skills">
                        <rect id="Rectangle 50" y="8" width="4" height="18" fill="#D9D9D9"/>
                        <rect id="Rectangle 51" x="13" width="4" height="35" fill="#2AAAF1"/>
                        <rect id="Rectangle 52" x="26" y="12" width="4" height="14" fill="#D9D9D9"/>
                        </g>
                    </svg>
                </div>

                <div className="section-skill-title title"> {content.title} </div>
            </div>
            <div className="content-skill">
                <div className="dev skill">
                    <div className="content-desc">
                    {content.dev} :
                    </div>
                     
                    <div className="skills">
                        {skill.dev.map((lista,i) => (<Lista key={i} name={lista}/>) )}  
                    </div>
                    
                </div>
                <div className="dev skill">
                <div className="content-desc">
                    {content.des} :
                    </div>
                     
                    <div className="skills">
                        {skill.des.map((lista,i) => (<Lista key={i} name={lista}/>) )}  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default memo(SectionSkill)