
import { useParams } from "react-router"
import artists_info from ".././assets/artists.json"
import 'react-slideshow-image/dist/styles.css'
import Artist_Carousel from ".././Components/Artists/Carousel";


export default function Artists() {
  let params = useParams();
  console.log(params.name);
  //process
  let artist_name = params.name;
  let names_list = artist_name.split("-")
  artist_name = names_list.join(" ");
  // Source - https://stackoverflow.com/questions/32589197/how-can-i-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript?answertab=trending#tab-top
  // Posted by chickens, modified by community. See post 'Timeline' for change history
  // Retrieved 2025-11-20, License - CC BY-SA 4.0
  
  //Add js that checks if artist in database, if not, the show error and redirect
  artist_name = artist_name.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())
  
  
  //let artist_desc = artists.find(item => item.name === artist_name)
  let artist_info = artists_info.find(item => item.name === artist_name)
  let artist_desc = artist_info.description;

  //image source pixabay.com/photos/pueblo-adobe-architecture-exterior-4596626/

  const slideImages = [
  {
    url: 'https://cdn.pixabay.com/photo/2019/11/02/15/22/pueblo-4596626_1280.jpg',
    caption: 'First Image'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/06/19/16/17/mijas-2419974_1280.jpg',
    caption: 'Second Image'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2014/11/28/08/19/painted-desert-548607_1280.jpg',
    caption: 'Third Image'
  },
];

  return (
    <div className="min-h-screen bg-(ffffef) p-8 ">
       <div className="max-w-7xl mx-auto ">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 45,
        }}>
          {artist_name}
        </div>
        <div className="flex justify-center text-base ">
          Curated by Person and Person
        </div>
        <div className="m-auto justify-center text-base w-1/2">
          
          Description: {artist_desc}
        
        </div>
         <div className="justify-center mt-[2%]">

          <Artist_Carousel  slide_images={slideImages} />

        </div>
      
      
      </div>
    </div>
    
  )
}
