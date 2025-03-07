import {Link} from 'react-router-dom'

function NotFoundPage(){


    return (<>
    <center>
    <h1>404 Page not exist</h1> 
    <Link to={"/homepage"}> Back to website 
    </Link>
    </center>

    </>)
}
export default NotFoundPage