import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

 function Accordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='accordion-div' data-aos='zoom-out'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{backgroundColor:'white'}}>
          <Typography component="span"><b>Our consistency over the years</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           With over 10 years of experience, we have become a trusted name in both 
           wholesale and retail flower sales,
           offering a stunning variety of fresh flowers and unique floral designs to suit every occasion.
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}  className='accordion'>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{backgroundColor:'white'}}>
          <Typography component="span"> <b>What we bring to the table</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
<b>Fresh Flowers & Bouquets</b> – Handpicked and beautifully arranged for weddings, birthdays, anniversaries, corporate events, and special moments.<br/>
<b>Flower Wrappers & Packaging</b> – A variety of stylish wrappers, boxes, and vases to enhance your floral gifts.<br/>
<b>Gift Items & Accessories</b> – Teddies, decorative pillows, and other charming add-ons to complement your floral gifts.<br/>
<b>Nationwide & 24-Hour Lagos Delivery</b> – We provide fast and reliable same-day delivery across Lagos and ship nationwide, ensuring your flowers arrive fresh and beautiful.<br/>
<b>Custom Arrangements</b> – Need something unique? Our expert florists create tailor-made designs to bring your vision to life.<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}  className='accordion'>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{backgroundColor:'white'}}>
          <Typography component="span"><b>Where you can locate us</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Shop H6 & H7, Giwa Shopping Complex, Ikoyi, Lagos State, Nigeria. Or just call, +234 706 381 5661
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation='20'

       className='accordion'>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={{backgroundColor:'white'}}>
          <Typography component="span"><b>What you are assured of</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        At Rutchina Flowers, we are dedicated to offering top-quality products at unbeatable prices, 
           ensuring that every customer gets the best value for their money. Whether you're celebrating a 
           special event or simply brightening someone's day,
            trust us to deliver beauty, elegance, and freshness with every order.
          </Typography>
        </AccordionDetails>
      </Accordion>

     
    </div>
  );
}
;
export default Accordions;