import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import { HashLink as Link  } from 'react-router-hash-link';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
    return (
     

        <footer >

            <div  className='grid grid-cols-2 md:grid-cols-4 pt-12' data-aos="slide-up">

            <div className='md:ml-8'>
                <ul>
                    <li>
                     <img src={require('./assets/images/Logo-removebg-preview.png')} alt='logo' width={200} height={100} className='mb-4 ' />
                       
                    </li>
                    <li>
                   
                         <Link to='#nav' className='ml-8 pt-8 font-serif hover:bg-amber-200 hover:rounded hover:p-1 underline'>Back to top</Link>
                    </li>
                    
                    
                    
                </ul>
               </div>

                <div id='location'>
                    <h6 className='footer-head'>Contact</h6>
                    <ul>
                        <li className='footer-texts hover:bg-amber-200 hover:rounded hover:p-1'>
                        <a href='https://www.facebook.com/share/15h4nVuWa5/?mibextid=wwXIfr' target='_blank' rel="noopener noreferrer" >
                                    <FacebookIcon className='foot-icon' />
                                 Facebook
                       </a>
                        </li>
                         <li className='footer-texts hover:bg-amber-200 hover:rounded hover:p-1'>
                         <a href='http://wa.me/message/XHB2H2ZDZ2A6C1' target='_blank' rel="noopener noreferrer" >
                               <WhatsAppIcon className='foot-icon' />
                               WhatsApp
                         </a>
                    </li>
                     <li className='footer-texts hover:bg-amber-200 hover:rounded hover:p-1'>
                     <a href='https://www.instagram.com/rutchina_flowers?igsh=Nmo2czd5Mm1iZ3Q2&utm_source=qr' target='_blank' rel="noopener noreferrer" >
                               <InstagramIcon className='foot-icon' />
                              Instagram
                    </a>
                    </li>
                     <li className='footer-texts'>
                     <PhoneIcon className='foot-icon' />
                     <span className='font-sans font-semibold'>
                     +234 706 381 5661
                     </span>
                       
                    </li>

                    <li className='footer-texts text-balance'>   
                        
                        <EmailIcon className='foot-icon'/>
                        rutchinaflowers <br></br>@gmail.com
                                 
                    
                  </li>
                    </ul>
                </div>

                <div >
                    <h6 className='footer-head' > Location </h6>
                    <ul>
                        <li className='footer-texts'>          
                            <PlaceIcon className='foot-icon' />
                              Shop H6 & H7, <br /> Giwa Shopping Complex, <br /> Ikoyi, Lagos State, Nigeria.
                        </li>
                         <li className='footer-texts'>
                         <LocalShippingIcon className='foot-icon' />
                           We provide fast and <br/> reliable same-day delivery
                           <br></br>across Lagos and ship <br></br> nationwide, ensuring your
                           <br></br> flowers arrive fresh and <br></br> beautiful.
                    </li>
                    </ul>
                </div>
                <div>
                    <h6 className='footer-head'>Payment</h6>
                    <ul>                
                     <li className='footer-texts'>
                     <PaymentsIcon className='foot-icon' />
                     Rutchina Flowers<br />
                     <span className='font-sans font-semibold'>
                     0085875589<br />
                     </span>
                    
                     Access Bank<br />
                     <a href='http://wa.me/message/XHB2H2ZDZ2A6C1' target='_blank' rel="noopener noreferrer"  className='hover:bg-amber-200 hover:rounded hover:p-1 underline'>Send proof of Payment here </a>
                   </li>
                      
                        
                    </ul>
                </div>

            </div>

              

                <div className='flex justify-center my-4'>
              <p>      
                  <CopyrightIcon sx={{ fontSize:'20px', paddingRight:'3px'}}/><span > 2025 Rutchina Flowers </span>
              </p>   
          </div>

        </footer>
    )
}

export default Footer;