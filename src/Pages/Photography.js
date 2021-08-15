import {React} from 'react';
import LazyLoad from 'react-lazyload';


const Photography = (props)=>{
    return(<div>
           <LazyLoad height={200} >
                <img src="https://cdn.tabme.io/user_public_assets/banners/60421879089bfc6871c753f6.png" /> 
                </LazyLoad>
         </div>);
}

export default Photography;