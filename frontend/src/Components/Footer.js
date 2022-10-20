
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


function Footer () {
    return (
        <div>
            

            <div class="footer">


                <div class="footer-content">
                    <h3><a aria-label="Home page link" href="index.html">IN4.0 GROUP</a></h3>
                    <ul class="socials-list" aria-label="social links">
                        <li><a aria-label="linkedin" href="https://www.linkedin.com/company/in4group/" target="_blank"  rel="noopener noreferrer"><AiFillLinkedin></AiFillLinkedin> </a></li>
                        <li><a aria-label="facebook" href="https://www.facebook.com/IN40Group/" target="_blank"  rel="noopener noreferrer"><AiFillFacebook></AiFillFacebook></a></li>    
                        <li><a aria-label="twitter" href="https://twitter.com/IN4_Group" target="_blank"  rel="noopener noreferrer"><AiFillTwitterSquare></AiFillTwitterSquare></a></li>
                        <li><a aria-label="youtube" href="https://www.youtube.com/channel/UC0lJRqPmVFPR1OAgTEaU-hA" target="_blank"  rel="noopener noreferrer"><AiFillYoutube></AiFillYoutube></a></li>
                        <li><a aria-label="instagram" href="https://www.instagram.com/in4group/" target="_blank"  rel="noopener noreferrer"><AiFillInstagram></AiFillInstagram></a></li>
                    </ul>
            <p><a aria-label="site links" href="/sitelinks" target="blank">Site Links</a></p>
        </div>



             </div>

        </div>

    )
}

export default Footer

