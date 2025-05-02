import { Stack, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
import Navbar from "./Navbar"
// import HeaderCard from "./HeaderCard";


const Header = () => {
  return (

   
    <Stack direction='column' className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={ require("./assets/Videos/bgVideo.mp4")} type="video/mp4"></source>
      </video>
      <Stack className="header " >   

      <Stack >
          <Navbar />
        </Stack>


        <div className="w-full h-screen flex flex-col justify-center items-center text-center px-4 pb-40"> 
          <h5 className="text-4xl lg:text-5xl font-bold text-slate-100" > Welcome To Rutchina Flowers </h5>
          <p className="text-slate-100 font-semibold text-wrap pt-1">We aim to bring smiles to your faces by offering beautiful,fresh flowers and gift items at affordable prices. 
          </p>
        </div>

      </Stack>     

    </Stack>


  )
}

export default Header;