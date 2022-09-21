import { FaTwitterSquare, FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import './assets/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-icons>">
                <a href="#" rel="noopener noreferrer" target="_blank">
                    <FaTwitterSquare />
                </a> 
                <a href="http://www.linkedin.com/in/jose-antonio-lopes-paiva-junior" rel="noopener noreferrer" target="_blank">
                    <FaLinkedin /> 
                </a>
                <a href="https://github.com/JoseAntonio5" rel="noopener noreferrer" target="_blank">
                    <FaGithubSquare /> 
                </a>
                <a href="https://www.instagram.com/jajunior5/" rel="noopener noreferrer" target="_blank">
                    <FaInstagramSquare />
                </a>
            </div>
        </div>
    )
}

export default Footer;