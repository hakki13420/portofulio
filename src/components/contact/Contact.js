import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import TextField from '@mui/material/TextField'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsTelephoneForward} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'
import HeadSection from '../head-section/HeadSection'
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Contact=()=>{
    const [emailSended, setEmailSended]= React.useState(false);
    const form = useRef();

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const sendEmail = (e) => {
        e.preventDefault();
        setEmailSended(false);
        emailjs.sendForm('service_bsocn7h', 'template_zm3liaq', form.current, 
        '91MBk0OAYLEE3dEz3' )
        .then((result) => {
            console.log(result.text);
            setEmailSended(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setEmailSended(false);
    }
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
            <form ref={form} onSubmit={sendEmail}>
                    <TextField  label="Name"                            
                                color="secondary"
                                variant="outlined"
                                name='name'
                                required
                    />
                    <TextField  label="Email" 
                                name="email"                            
                                variant="outlined"
                                required
                    />
                    <TextField  label="Message" 
                                name='message'
                                variant="outlined"
                                multiline     
                                maxRows={5}                       
                                required
                    />
                    <Button variant="contained" 
                            color="success"                            
                            type="submit"
                    >
                        Send
                    </Button>
            </form>
            </section>
            {
                emailSended?
                <Stack spacing={2} sx={{ width: '100%' }}>                    
                    <Snackbar open={emailSended} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            email sended success succefully!
                        </Alert>
                    </Snackbar>               
                    
                </Stack>
                :
                <Stack spacing={2} sx={{ width: '100%' }}>                    
                    <Snackbar open={emailSended} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                         error in sending email!
                        </Alert>
                    </Snackbar>               
                    
                </Stack>
            }
        </>
    );
}

export default Contact