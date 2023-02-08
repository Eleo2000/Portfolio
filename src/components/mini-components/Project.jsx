import '../../style/projet.css'

const Project = (props) =>{
    
    return(
        <>
        <div style ={{
            backgroundImage : `url(${props.projets[props.id].img})`,
            
        }} className="project-card" onClick={() =>props.show(props.id)}>
           
            <div className="titre-project">{props.title}</div>
            
        </div>
        </>
    )
}

export default Project;