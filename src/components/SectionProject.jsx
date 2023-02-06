import Project from "./mini-components/Project"



const SectionProject = (props) => {
    let content = {
        EN: {
            title: "MY PROJECTS",
            btn_show:"checkout project"
        },
        FR: {
            title: "MES PROJETS",
            btn_show:"consulter le projet"
        }
      };
      
      props.language === "FR"
        ? (content = content.FR)
        : (content = content.EN);


    return(
        <div className="section-project section">
            <div className="titra titra-project">
                <div className="logo-project logoo">
                <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Projects">
                    <rect id="Rectangle 53" x="30" width="4" height="25" transform="rotate(90 30 0)" fill="#D9D9D9"/>
                    <rect id="Rectangle 54" x="35" y="17.5" width="4" height="35" transform="rotate(90 35 17.5)" fill="#D9D9D9"/>
                    <rect id="Rectangle 55" x="24.5" y="9" width="4" height="14" transform="rotate(90 24.5 9)" fill="#2AAAF1"/>
                    </g>
                </svg>
                </div>
                <div className="section-project-title title titra"> {content.title} </div>
            </div>
        
            <div className="content-project">
                {props.projets.map((p)=>(
                    <Project btn_show={content.btn_show} key={p.id} projets={props.projets} id={p.id} title={p.title} show = {props.show}  />
                ))}
            </div>
        </div>
    )
}

export default SectionProject;