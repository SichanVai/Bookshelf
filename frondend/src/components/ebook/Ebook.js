import React from 'react'
import { Link } from "react-router-dom";
import SocialCards from '../SocialCards.js';
const ebook = () => {

  return (
<>
    <div className="text-2xl font-bold">
           <p style={{ textAlign: 'center' }} >The Hobbit</p>
    </div>
    <div className="h-24 w-24">
    <img role="button" 
                        src="https://images-na.ssl-images-amazon.com/images/I/61VxEKq8B1L._SX365_BO1,204,203,200_.jpg"
                        alt="Avatar Tailwind CSS Component" /><p style={{ textAlign: 'center' }}>Page1</p><br/>
    </div>
     
    <div className="text-1xl font-bold">
           <Link to={'/SocialCards'}>
           <p p style={{ textAlign: 'center', color: 'blue' }} >SocialCards</p>
           </Link>
    </div>
  
  </>
  )
}
export default ebook;