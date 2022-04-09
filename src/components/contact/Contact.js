import './contact.css'
import TextField from '@mui/material/TextField'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsTelephoneForward} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import HeadSection from '../head-section/HeadSection'
import Button from '@mui/material/Button';

const Contact=()=>{

    return (
        <>
            <HeadSection title='Contact' description=''/>
            <section id="contact" className="contact">
            <div className="contact-icones">
                <div className="contact-icones-item email">
                    <AiOutlineMail />
                    <p>hak_rab@yahoo.fr</p>
                </div>
                <div className="contact-icones-item tel">
                    <BsTelephoneForward />
                    <p>+213 665170990</p>
                </div>
                <div className="contact-icones-item facebook">
                    <BsFacebook />
                    <p>hakki hakki@facebook.com</p>
                </div>
                <div className="contact-icones-item whatsup">
                    <SiWhatsapp />
                    <p>+213 665170990</p>
                </div>
            </div>
            <form>
                    <TextField  label="Name"                            
                                color="secondary"
                    />
                    <TextField  label="Email"                            
                    />
                    <TextField  label="Message"
                                multiline     
                                maxRows={5}                       
                    />
                    <Button variant="contained" 
                            color="success"
                            href="#outlined-buttons"
                    >
                        Send
                    </Button>
            </form>
            </section>
        </>
    );
}

export default Contact