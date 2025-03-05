import {Link} from 'react-router-dom'

function NotFoundPage(){


    return (<>
    
   <h1>404 Page not exist</h1> 
    <Link to={"/"}> Back to website 
    </Link>
    </>)
}
export default NotFoundPage