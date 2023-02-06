import '../../style/projet.css'

const Project = (props) =>{
    
    return(
        <>
        <div style ={{
            backgroundImage : `url(${props.projets[props.id].img})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : '250%',
            backgroundPosition : 'center'
        }} className="project-card">
            <div className="consulter" onClick={() =>props.show(props.id)}> {props.btn_show} 
                
            </div>
            <div className="titre-project">{props.title}</div>
            
        </div>
        </>
    )
}

export default Project;