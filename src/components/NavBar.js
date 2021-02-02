import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/'> Home </Link> |
            <Link to='/About'> About Us </Link> |
            <Link to='/Portfolio'> Portfolio </Link> |
            <Link to='/Design' label="Coming Soon"> DIY Design </Link> |
            <Link to='/Homeowner' label="Coming Soon"> For Homeowners </Link> |
            <Link to='/Contact'> Contact Us </Link>
        </div>
    )
}

export default NavBar
