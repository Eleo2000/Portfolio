import '../../style/liste.css'
const Lista =(props) =>{
    return(
        <span key={props.i} className='span'>{props.name}</span>
    )
}

export default Lista