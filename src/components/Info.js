import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import './assets/Info.css';

function Info() {
    return (
        <div className="Info">
            <img src="https://avatars.githubusercontent.com/u/55211103?v=4" alt="Jose Antonio" />
            <h1>José Antônio</h1>            
            <h4>Web Developer</h4>
            <a href="mailto: jlopespaiva00@gmail.com">
                <button className="Info-email"><FaEnvelope /> Email</button>
            </a>
            <a href="http://www.linkedin.com/in/jose-antonio-lopes-paiva-junior" rel="noopener noreferrer" target="_blank">
                <button className="Info-linkedin"><FaLinkedin /> LinkedIn</button>
            </a>
        </div>
    )
}

export default Info;