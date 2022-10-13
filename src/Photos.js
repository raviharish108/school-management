import React from 'react';

export function Photos() {
  return (
    <div className='photos_container'>
      <h1>North London Collegiate School (Singapore)</h1>
      <div className='compo'>
        <div className='compo1'>
          <h1>Conveniently Located</h1>
          <p>The Campus is located on Depot Road and is just 10 minutes away from popular areas such as Orchard Road, Holland Village, Keppel Bay and the Central Business District of Singapore.</p>
        </div>
        <img src="https://media.istockphoto.com/photos/punggol-21-new-town-picture-id471524665?k=20&m=471524665&s=612x612&w=0&h=ffKPEJ9Vc7-KUrMIyYP0mA3640LW2I2xrtGHSAJBR3s=" className='compo_image' alt="schoolphoto" />
        <div className='compo1'>
          <h1>300,000 sqft of learning spaces</h1>
          <p>The school boasts a built-up area of approximately 300,000 sqft, with a diverse array of learning spaces required to deliver an outstanding world-class education which caters to every possible interest and talent.</p>
        </div>
      </div>
    </div>
  );
}
