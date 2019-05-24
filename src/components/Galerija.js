import React, { Component } from 'react';

import img1 from '../img/gallery/img1.jpg';
import img2 from '../img/gallery/img2.jpg';
import img3 from '../img/gallery/img3.jpg';
import img4 from '../img/gallery/img4.jpg';
import img5 from '../img/gallery/img5.jpg';
import img6 from '../img/gallery/img6.jpg';
import img7 from '../img/gallery/img7.jpg';
import img8 from '../img/gallery/img8.jpg';
import img9 from '../img/gallery/img9.jpg';
import img10 from '../img/gallery/img10.jpg';
import img11 from '../img/gallery/img11.jpg';
import img12 from '../img/gallery/img12.jpg';
import img13 from '../img/gallery/img13.jpg';
import img14 from '../img/gallery/aboutMe.jpeg';

import Gallery from 'react-grid-gallery';
class Galerija extends Component {
  
  render () {

    

    const IMAGES =
    [{
            src:`${img1}` ,
            thumbnail: `${img1}`,
            thumbnailWidth: 340,
            thumbnailHeight: 340,
           
           
    },
    {
            src: `${img2}`,
            thumbnail:`${img2}`,
            thumbnailWidth: 340,
            thumbnailHeight:340,       
    
    },
    {
      src: `${img3}`,
      thumbnail: `${img3}`,
      thumbnailWidth: 340,
      thumbnailHeight:340,       

},
{
  src: `${img4}`,
  thumbnail: `${img4}`,
  thumbnailWidth: 340,
  thumbnailHeight:'auto',       

},
{
  src: `${img6}`,
  thumbnail: `${img6}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img5}`,
  thumbnail: `${img5}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},

{
  src: `${img7}`,
  thumbnail: `${img7}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img8}`,
  thumbnail: `${img8}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img9}`,
  thumbnail: `${img9}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img10}`,
  thumbnail: `${img10}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img11}`,
  thumbnail: `${img11}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img12}`,
  thumbnail: `${img12}`,
  thumbnailWidth: '100%',
  thumbnailHeight:'auto',       

},
{
  src: `${img14}`,
  thumbnail: `${img14}`,
  thumbnailWidth: 'auto',
  thumbnailHeight:'auto',       

}];


    
    return (
      <div className="gallery" >
        <div className="gallery-container">
            


            <Gallery images={IMAGES}
            enableImageSelection={false}
            rowHeight={340}
            
            />
        </div>
      </div>

    );
  };
}

export default Galerija;