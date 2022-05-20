import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import './Footer.css';


const Footer = () => {
    const iconStyles = { color:"white", fontSize: "2.5rem"}
    return ( 
        <>
            <footer>
                <div className='footer-container'>
                    <div>
                        <p><span>Surebooks</span></p>
                    </div>
                    <div>
                        <p>© Copyright 2020 LuisFrag. All rights reserved.</p>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/dunsin-ajibabi-7921b4224/'>
                            <AiFillLinkedin style ={iconStyles}/>
                        </a>
                        <a href='https://github.com/Gaisensai'>
                            <AiFillGithub style={iconStyles}  />
                        </a>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;