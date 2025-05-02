


// import Box from '@mui/material/Box';
import {  Stack,  Typography } from '@mui/material';
// import Grid from '@mui/material/Grid2';
import useAosAnimation from './useAosAnimation.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';





const settings = {
  dots: true,
  infinite: true,

  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
  ]
};

function TypeCard() {

  useAosAnimation();

  
  return (
    <Stack  style={{display: 'flex', justifyContent:'center'}} id='flower-type'>

      <Stack>
        <Typography variant="h3"
          sx={{
            justifyContent: 'center', fontWeight: 'bold', position: 'relative',
            display: 'flex',
            textDecorationColor: 'rgb(244, 196, 48)',
            my: 14,
            '&::after': {
              content: '""',
              display: 'block',
              width: '15%', // Adjust to control underline length
              height: '1px', // Thickness of the underline
              backgroundColor: 'rgb(244, 196, 48)', // Underline color
              position: 'absolute',
              bottom: '-2px', // Controls gap between text and underline
              left: '43%', // Centers the underline
            }
          }} 
          style={{ fontFamily: 'Playfair Display, serif',
            fontSize: '30px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
           
            textAlign: 'center',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)'}} 
          data-aos='slide-up' >
          Flower Types  </Typography>
      </Stack>


   <Stack  style={{}}   >

     <div className='ml-5 mb-16'>
            <Slider {...settings}>
              {cardData.map((data1, index) => (
                <div className='card rounded shadow-md overflow-hidden max-w-[230px] max-h-96'>
                  <LazyLoadImage src={data1.img} alt={data1.name} id='type-img' effect='blur' className='w-60 object-cover relative h-60'/>
                  <div className='p-1 text-sm text-center'>
                    <span className='font-bold pr-2 text-xl'>{data1.name}</span>
                    <p className='pr-2'>{data1.description}</p>
                  </div>
                </div>
              ))}
            </Slider>

     </div>
     
      </Stack>


    </Stack>

  );
}


const cardData = [
  {
    img: require('./assets/images/red.webp') ,
    name: 'Red Roses',
  description: " Red roses, the ultimate symbol of love and passion, red roses have been associated with romance for centuries. In Greek mythology, they were linked to Aphrodite.",
  index:`1`
  },

{
  img: require('./assets/images/Yellow.webp') ,
   name : 'Yellow Roses',
      description: "  Yellow Roses, represents friendship, joy, and new beginnings, yellow roses brighten up any bouquet and convey warm, cheerful energy.",
      index:'2'
    },

{
  img: require('./assets/images/pink.webp') ,
    name: 'Pink Roses',
      description: "Pink Roses are a symbol of grace, admiration, and sweetness, pink roses accomodating and perfect for expressing value, appreciation and gratitude.",
      index:'3'

    },


{
  img: require('./assets/images/w15.png') ,
    name: 'Berries',
      description: " Berries are often used as fillers, berries (like hypericum or holly berries) add texture, vibrancy, and seasonal charm, making any bouquet look lush and dynamic. ",
      index:'5'

    },

{
  img: require('./assets/images/gypso.2.webp') ,
    name: 'Baby Breath',
      description: "Baby’s Breath is Known as a symbol of everlasting love and purity, these delicate white flowers are often used in bridal bouquets and represent sincerity.",
      index:'6'

    },

{
  img: require('./assets/images/orange.webp') ,
    name: 'Orange Roses',
      description: " Orange Roses are fiery blooms that stands for enthusiasm, excitement, and desire, making them a perfect choice for celebrating achievements.",
      index:'7'
    },



{
  img: require('./assets/images/w10.png') ,
    name: 'Hydrangea',
      description: 'Hydrangeas are known for their lush, voluminous blooms, hydrangeas symbolize gratitude, understanding, and heartfelt emotions.',
    index:'9'
    },

{
  img: require('./assets/images/w11.png') ,
    name: 'Lilies',
      description: 'Lilies are elegant and fragrant, lilies symbolize purity, renewal, and devotion. In many cultures, they are associated with spirituality and rebirth.',
      index:'10'
    },

{
  img: require('./assets/images/Chrysant.webp') ,
    name: 'chrysanthemums',
      description: ' Chrysanthemums are often called "mums," these flowers represent longevity, happiness, and prosperity. In some cultures, they are a symbol of honor.',
  index:'11'
    },

{
  img: require('./assets/images/spray-rose.webp') ,
    name: 'Spray Roses',
      description: ' Spray Roses are smaller and more delicate than traditional roses, they symbolize grace, elegance, and charm, adds texture to floral arrangements.',
      index:'12'
    
    }
]

export default TypeCard;