import React, {useContext} from 'react';

import {Context} from '../Context';
import Image from '../components/Image';
import  {getClass} from '../utils';

export default function Photos() {

   const {allPhotos} = useContext(Context);

   const imageElement = allPhotos.map((img, i) => (
      <Image key={img.id} img={img} className={getClass(i)} />
   ))
   return (
      <main className="photos">
         {imageElement}
      </main>
   )
};
