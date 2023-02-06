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


    return(
        <>
        <div className="Home">
            <div className="photo-Home">Photo Home</div>
            <div className="content-home">
                <div className="intro">{content.intro}</div>
                <div className="info-spec">{content.info}</div>
                
            </div>
            <div className="colors">
            <div className="color-blue color"></div>
            <div className="color-red color"></div>
            
        </div>
        </div>
        
    </>
    )
}

export default Home