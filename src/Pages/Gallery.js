import {React, useEffect, useState} from 'react';
import 'react-bnb-gallery/dist/style.css'
import { Container, Button } from 'react-bootstrap';
import ReactBnbGallery from 'react-bnb-gallery';
import {default as Gallery2}  from 'react-grid-gallery';
import styled from 'styled-components';
// = ['https://cdn.tabme.io/user_public_assets/banners/60421879089bfc6871c753f6.png'];
var image_names = ['IMG20200217101909.jpg',
'IMG20200217103315.jpg',
'IMG20200217110144.jpg',
'IMG20200217133038.jpg',
'IMG20200217135301.jpg',
'IMG20200217190332.jpg',
'IMG20200218124935.jpg',
'IMG20200218164850.jpg',
'IMG20200218220307.jpg',
'IMG20200219194941.jpg',
'IMG20200219195308.jpg',
'IMG20200220182147.jpg',
'IMG20200221115530.jpg',
'IMG20200221122214.jpg',
'IMG20200221124802.jpg',
'IMG20200221141628.jpg',
'IMG20200221202204.jpg',
'IMG20200222131321.jpg',
'IMG20200222172601.jpg',
'IMG20200222174837.jpg',
'IMG20200223131000.jpg',
'IMG20200223131009.jpg',
'IMG20200301151856.jpg',
'IMG20200304204037.jpg',
'IMG20200306131725.jpg',
'IMG20200307202459.jpg',
'IMG20200308122449.jpg',
'IMG20200308171501.jpg',
'IMG20200308182754.jpg',
'IMG20200310133909.jpg',
'IMG20200310170623.jpg',
'IMG20200310170630.jpg',
'IMG20200310170711.jpg',
'IMG20200310170715.jpg',
'IMG20200314161604.jpg',
'IMG20200314172802.jpg',
'IMG20200320212254.jpg',
'IMG20200323190250.jpg',
'IMG20200324150418.jpg',
'IMG20200324163150.jpg',
'IMG20200325154320.jpg',
'IMG20200405150958.jpg',
'IMG20200408234425.jpg',
'IMG20200412154143.jpg',
'IMG20200422130734.jpg',
'IMG20200422170459.jpg',
'IMG20200422170503.jpg',
'IMG20200422170652.jpg',
'IMG20200424014518.jpg',
'IMG_20200528_184236.jpg',
'IMG_20200530_133758.jpg',
'IMG_20200530_193356.jpg',
'IMG_20200531_171110.jpg',
'IMG_20200531_171541.jpg',
'IMG_20200531_171717.jpg',
'IMG_20200606_010026.jpg',
'IMG_20200606_011650.jpg',
'IMG_20200606_191642.jpg',
'IMG_20200606_192645.jpg',
'IMG_20200608_171853.jpg',
'IMG_20200610_024426.jpg',
'IMG_20200626_185933.jpg',
'IMG_20201224_150258.jpg',
'IMG_20201230_212436.jpg',
'IMG_20210317_195233.jpg',
'IMG_20210317_202557.jpg',
'IMG_20210317_203008.jpg',
'IMG_20210318_025131.jpg',
'IMG_20210318_032525.jpg',]
const Gallery = (props)=>{
    // return(<div>Hello</div>);
    const [isOpen, setIsOpen] = useState(false);
    const [IMAGES, setIMAGES] = useState([]);
    const [PHOTOS, setPHOTOS] = useState([]);
    
    useEffect(()=>{
        var IMAGES1 =[];
    var PHOTOS1 =[];
        image_names.map(name=>{
            IMAGES1.push({src: "https://cdn.tabme.io/photo-gallery/o98-gallery/"+name,
            thumbnail: "https://cdn.tabme.io/photo-gallery/o98-gallery-thumbs/"+name,
            // thumbnailWidth: 320,
            thumbnailHeight: 320,
            isSelected: false,
            caption: ""})

            PHOTOS1.push({
                photo:"https://cdn.tabme.io/photo-gallery/o98-gallery/"+name,
                number:1,
                caption:"",
                subcaption:""
            })
            setIMAGES(IMAGES1);
            setPHOTOS(PHOTOS1);
        });
       

    },[]);
    // const urls = [
    //     {
    //         photo:'https://cdn.tabme.io/user_public_assets/banners/60421879089bfc6871c753f6.png',
    //         number:1,
    //         caption:"myphoto",
    //         subcaption:"this is a subcaptions"
    //     },
    //     {
    //         photo:'https://cdn.tabme.io/user_public_assets/banners/602e3db0c86b410b93756de6.png',
    //         number:2,
    //         caption:"myphoto",
    //         subcaption:"this is a subcaption"
    //     }
    
    // ];
    // // var PHOTOS = urls;
    console.log(PHOTOS)
    return (
       <Container>
           {PHOTOS.length > 0 && <>
           <center>
        <GalleryButton onClick={() => setIsOpen(true)}>
          <b>Gallery</b>
        </GalleryButton>
        </center>
        <br/>
        <ReactBnbGallery
          preloadSize={5}
          show={isOpen}
          photos={PHOTOS}
          onClose={() => setIsOpen(false)}
        />
        <Gallery2 images={IMAGES} /></>}
      </Container>
    );
}

export default Gallery;

const GalleryButton = styled.button`
display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 3px solid black;
padding: 1.375rem 1.75rem;
font-size: 2rem;
font-weight:300;
font-family:'Staatliches', cursive;
line-height: 1.5;
border-radius: .25rem;
letter-spacing:0.35rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;