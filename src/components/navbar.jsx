import { Link } from "react-scroll";
const Navbar = () => {
    const download = () => {
        const link = document.createElement('a');
        link.href = require('../assets/Favour_Resume.pdf');
        link.setAttribute('download', 'Favour_Resume.pdf');
        document.body.appendChild(link);
        link.click();
    }
    return ( 
        <nav className="navbar">
            <Link to="home" spy={true} smooth={true} offset={-150} duration={500} className="not"><h1>K-SWITCH</h1></Link>
            <div className="links">
                <Link to="aboutContent" spy={true} smooth={true} offset={-109} duration={500}>ABOUT</Link>
                <Link to="projects" spy={true} smooth={true} offset={-109} duration={500}>PROJECTS</Link>
                <Link to="email" spy={true} smooth={true} offset={-109} duration={500}>LET'S CONNECT</Link>
                <button className="downloadBTN" onClick={download}>Download Resume</button>
            </div>
        </nav>
     );
}
 
export default Navbar;