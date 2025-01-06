import { useNavigate } from "react-router-dom"

const About =()=>{
     let nav = useNavigate()
     function contactpage(){
        nav('/contact')
     }
    return(
        <>
        
        <h1>about</h1>
        <button onClick={contactpage} >daba de</button>
        </>
    )
}
export default About