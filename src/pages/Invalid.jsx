import {Link} from 'react-router-dom'

function Invalid(){


    return (<>
    <center>
    <h1>Invalid Credendtials Please Login</h1> 
    <Link to={"/"}> Login here!
    </Link>
    </center>

    </>)
}
export default Invalid