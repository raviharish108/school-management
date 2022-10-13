import React from 'react';
import { useState } from "react";

export function Discover() {

  let Array = [{ url: "https://media.istockphoto.com/photos/school-kids-running-in-elementary-school-hallway-front-view-picture-id839325654?k=20&m=839325654&s=612x612&w=0&h=AzG_B3LZ9xfIS1lGDV8oeIZxHogC4fHtQrKLMqU8hHI=", heading: "Since 1850, NLCS (UK) has maintained its reputation for providing an ambitious and aspirational education" },
  { url: "https://st.depositphotos.com/1594308/1714/i/450/depositphotos_17140201-stock-photo-group-of-pupils.jpg", heading: "Academic Staff who are passionate about the subject and dedicated to sharing their knowledge & enthusiasm." },
  { url: "https://www.cdc.gov/ncbddd/adhd/features/images/teen-studying-at-home-on-computer-700px.jpg?_=83020", heading: "We encourage students to actively engage with their community and the wider world." }];
  const [state, setstate] = useState(Array);
  const [image, addimage] = useState("");
  const [heading, setheading] = useState("");
  return (
    <div>
       <div className="add_photo">
        <h1>You Can Share Our School Photos</h1>
        <input type="text" placeholder='image_url' onChange={(event) => addimage(event.target.value)} />
        <input type="text" placeholder="heading" onChange={(event) => setheading(event.target.value)} />
        <button onClick={(() => setstate([...state, { url: image, heading: heading }]))}>add photo</button>
      </div>
      <div className='discover'>
        l{state.map((value) => <Component url={value.url} heading={value.heading} />)}
      </div>
     
    </div>
  );
}
function Component({ url, heading }) {
  return (
    <div className='component'>
      <img className='dis_image' src={url} alt="photo" />
       <p className='dis_p'>{heading}</p> 
    </div>
  );
}
