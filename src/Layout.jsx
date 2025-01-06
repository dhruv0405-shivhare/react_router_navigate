import { Link,Outlet } from "react-router-dom"
function Nav(){
    return(
        <>
        <div>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about' >About</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
                
            </ul>
        </div>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
export default Nav