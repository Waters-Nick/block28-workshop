import { Link } from "react-router-dom"

function NavBar () {
 return (
  <div id="navbar">
    <Link to={'/'}>HOME</Link>
    <Link to={'/blue'}>BLUE</Link>
    <Link to={'/red'}>RED</Link>
</div>
 )
}

export default NavBar