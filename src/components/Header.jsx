
import '../style/header.css'

const Header = (props) => {
    function load(){
        window.location.reload();
    }
    return(
        <>
            <div className="Header">
                <div onClick={() => load()} className="logo-e el-top"> <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="logo-Eleo">
                    <rect id="Rectangle 56" width="6" height="35" rx="3" fill="#D9D9D9"/>
                    <rect id="Rectangle 59" x="32" y="31" width="5" height="32" rx="2.5" transform="rotate(90 32 31)" fill="#D9D9D9"/>
                    <rect id="Rectangle 58" x="32" width="5" height="32" rx="2.5" transform="rotate(90 32 0)" fill="#D9D9D9"/>
                    <rect id="Rectangle 57" x="23" y="15" width="6" height="14" rx="3" transform="rotate(90 23 15)" fill="#2AAAF1"/>
                    </g>
                </svg>
                </div>
                <div className="language el-top">
                    <select
                        className="custom-select"
                        value={props.language}
                        onChange={e => props.handleSetLanguage(e.target.value)}
                    >
                        <option value="EN">EN</option>
                        <option value="FR">FR</option>
                    </select>
                </div>
                
                

            </div>
            
        </>
    )
}

export default Header