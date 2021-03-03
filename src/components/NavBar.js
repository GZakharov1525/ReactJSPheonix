import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'

const NavBar = () => {
    return (
        <div>
        <CustomLink to='/'> Home </CustomLink> |
        <CustomLink to='/About'> About Us </CustomLink> |
        <CustomLink to='/Portfolio'> Portfolio </CustomLink> |
        <CustomLink to='/Design' label="Coming Soon"> DIY Design </CustomLink> |
        <CustomLink to='/Homeowner' label="Coming Soon"> For Homeowners </CustomLink> |
        <CustomLink to='/Contact'> Contact Us </CustomLink>
    </div>
    )
}

export default NavBar
