import React , { useState } from 'react'
 
function Preview(props) {

console.log(props.name);

    const {
        img ,fname, lname, dob, phone, 
        email, mTounge, work, grad, veg, 
        fatherName, fatherOcc, motherName, 
        motherOcc, sibl, belief, about, expectn, ganesha } = props.data
    
    return (

        <div className="test">

        </div>
    //   <div id="bio" className="preview">
    //       <div className={props.name}>
    //          <div className="detail">
    //             <div className="sub-detail">
    //                 <img className="profile-img" src={img} alt=" "/>
    //                 <h3>Overview</h3>
    //                 <p>{work}</p>
    //                 <p>{grad}</p>
    //                 <p>{veg}</p>
    //             </div>
    //             <div className="sub-detail">
    //                 <h3>Family</h3>
    //                 <p>{fatherName}</p>
    //                 <p>({fatherOcc})</p>
    //                 <p>{motherName}</p>
    //                 <p>({motherOcc})</p>
    //                 <p>Siblings: {sibl}</p>
    //             </div>
    //             <div className="sub-detail">
    //                 <h3>Beliefs</h3>
    //                 {belief.map((b, i) =>
    //                     <p key={i}>{b}</p>
    //                 )}
                    
    //             </div>
    //             <div className="horo">
    //                 <h3>Horoscope</h3>
    //                 <p>Born in lucknow</p>
    //             </div>
                 
    //          </div>
    //          <div>
    //             <img className="ganesha" src={ganesha} alt=" "/>
    //             <div className="description" >
    //                 <div>
    //                     <h1>{fname} {lname}</h1>
    //                     <p>DOB ({dob})</p>
    //                     <p>{phone}</p>
    //                     <p>{email}</p>
    //                     <p>Mother Tounge: {mTounge}</p>
    //                 </div>
    //                 <div className="detailed-description">
    //                     <div>
    //                         <h3>About myself</h3>
    //                         <p>{about}</p>
    //                     </div>
    //                     <div>
    //                         <h3>Expectations</h3>
    //                         <p>{expectn}</p>
    //                     </div> 
    //                 </div>
                    
    //             </div>
                
                 
    //          </div>
    //       </div>
    //   </div>
    
  )
}
 
export default Preview;
 