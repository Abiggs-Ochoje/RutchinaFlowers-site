
import { Typography, Stack } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from "react-slick";


const Product = () => {

  let settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      {breakpoint: 900, settings: { slidesToShow: 3 }},
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };


  return (
    <div  id='product'>
      <Stack style={{  backgroundColor:  'rgba(255, 255, 0, 0.3)',
    }}>
       

        <Stack className='product-text-stack'>

          <Typography variant="h3"
            sx={{
              justifyContent: 'center', position: 'relative',
              display: 'flex', color: 'black', mt:3,
              mb: 10,
              '&::after': {
                content: '""',
                display: 'block',
                width: '15%', // Adjust to control underline length
                height: '1px', // Thickness of the underline
                backgroundColor: 'rgb(244,198,48)', // Underline color
                position: 'absolute',
                bottom: '-2px', // Controls gap between text and underline
                left: '43%', // Centers the underline
              }
            }} style={{ fontFamily: 'Playfair Display, serif',
              fontSize: '30px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
             
              textAlign: 'center',
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
              
              
              }} data-aos='slide-up' >
            Our Products
          </Typography>

          <div data-aos="slide-up" className='shadow-md xs:rounded md:rounded-full bg-white py-6 px-6 mb-6  md:mb-20 flex flex-col md:flex-row md:mx-16 gap-4 md:justify-center items-center '>
            <p className='basis-1/2 tracking-wide'> 
            At Rutchina Flowers, we provide both wholesale and retail flower deals, catering to all
            your floral needs. Our collection includes a wide variety of fresh flowers, elegant vases,
            adorable teddies, stylish gift boxes, and much more—perfect for every occasion.💐✨
            </p>

            <button className='shadow-md rounded basis-1/3 font-semibold text-4xl uppercase font-momo px-4 py-2 h-16 hover:bg-yellow-100' id="p-butt"   
            style={{border:"3px solid rgb(152, 143, 56)"}}>
              <a href='http://wa.me/message/XHB2H2ZDZ2A6C1' target='_blank' rel="noopener noreferrer"  style={{color:'rgb(107, 105, 38)'}} id="p-butt-a">
                Place Order
              </a>
          </button>
          </div>

         
        </Stack>

        <Stack  style={{}} >

<div className='ml-5 mb-24 '>
       <Slider {...settings}>
         {ProductData.map((data1) => (
           <div  className='card shadow-md overflow-hidden max-w-[170px] rounded-full' >
             <LazyLoadImage src={data1.img} alt={data1.name} id='type-img' effect='blur' className='w-60 object-cover relative h-60' />
             <div className='text-center p-3' style={{backgroundColor:'rgb(179, 168, 66)'}}>
               <span className='font-bold pr-2 text-xl text-center'>{data1.name}</span>
             </div>
           </div>
         ))}
       </Slider>

</div>
 
      </Stack>

       
      </Stack>
       
    </div>
  )
}


const ProductData = [


  {
    img: require('./assets/images/flowerGrid.webp'),
    name: 'Flowers',
   
    
  },


  {
    img: require('./assets/images/vaseGrid.webp'),
    name: 'Vases',
   
    
  },


  {
    img: require('./assets/images/boxGrid.webp'),
    name: 'Boxes',
   
    
  },



  {
    img: require('./assets/images/Wrappers.webp'),
    name: 'Wrappers',
   
  },



  {
    img: require('./assets/images/editPillows.webp'),
    name: 'Pillows',
   
    
  },

  {
    img: require('./assets/images/teddy.webp'),
    name: 'Teddies',
   
    
  },

  {
    img: require('./assets/images/chocolate.webp'),
    name: 'Chocolates',
   
    
  },


  {
    img: require('./assets/images/cake.webp'),
    name: 'Cakes',
   
    
  },






]

export default Product;