import { useNavigate, useParams } from "react-router-dom"

const About =()=>{
     let {name,age} = useParams()
     console.log(name);
     
     let nav = useNavigate()
     function contactpage(){
        nav('/contact')
     }
    return(
        <>
        
        <h1>about</h1>
        <h1> my name is { name } and age { age } </h1>
        <button onClick={ contactpage } >daba de</button>
        </>
    )
}
export default About