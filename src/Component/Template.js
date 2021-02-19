import React , { useState } from 'react'
import Preview from './Preview'
 
function Template(props) {

    const [data, setData] = useState({
        img: "",
        fname: "",
        lname: "",
        dob: "",
        phone: "",
        email: "",
        mTounge: "",
        work: "",
        grad: "",
        veg: "",
        fatherName: "",
        fatherOcc: "",
        motherName: "",
        motherOcc: "",
        sibl: "",
        belief: [],
        about: "",
        expectn: "",
        ganesha: "./images/ganesha.jpg"
    })

    function handleChange(e){
        const {name, value} = e.target;
        setData(prevValue=>
            
            name === "fname" ?
            {
                img: prevValue.img,
                fname: value,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "lname" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: value,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "dob" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: value,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "phone" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: value,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "email" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: value,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "mTounge" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: value,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "work" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: value,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "grad" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: value,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "veg" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: value,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "fatherName" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: value,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "fatherOcc" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: value,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "motherName" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: value,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "motherOcc" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: value,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "sibl" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: value,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "about" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: value,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            name === "expectn" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: value,
                ganesha: prevValue.ganesha
            }    :
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    
        )
    }
    
    function handleClick(e){
        const name = e.target.name ;
        const value = document.getElementById('belief').value;
        setData(prevValue=>
            name === "belief" ?
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief, value],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }  :
            null 
        )
    }

    function img_path(input){
        let imgSrc = (window.URL ? URL : window.webkitURL).createObjectURL(input.target.files[0]);
        setData(prevValue=>
            
        input.target.name === "img" ?
            {
                img: imgSrc,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            }    :
            {
                img: prevValue.img,
                fname: prevValue.fname,
                lname: prevValue.lname,
                dob: prevValue.dob,
                phone: prevValue.phone,
                email: prevValue.email,
                mTounge: prevValue.mTounge,
                work: prevValue.work,
                grad: prevValue.grad,
                veg: prevValue.veg,
                fatherName: prevValue.fatherName,
                fatherOcc: prevValue.fatherOcc,
                motherName: prevValue.motherName,
                motherOcc: prevValue.motherOcc,
                sibl: prevValue.sibl,
                belief: [...prevValue.belief],
                about: prevValue.about,
                expectn: prevValue.expectn,
                ganesha: prevValue.ganesha
            })
        

    }

    function createPdf(){
        const pdf = document.getElementById('bio');
        console.log(pdf);
        var opt = {
            margin: 0,
            filename:     `Bio.pdf`,
            image:        { type: 'jpg', quality: 1 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }
        };
        window.html2pdf().from(pdf).set(opt).save();
    }

    const [hidden, setHidden] = useState(true);
    function openSneak(){
        setHidden(prevValue=>!prevValue)
    }
    return (
        <div>
            <div className="template">
                <div className="template-data">
                    <img className="profile-img-preview" name="img" src={data.img} alt=" " />
                    <input id="bio-img" name="img" type="file" onChange={img_path} hidden />
                    <label className="bio-img-label" htmlFor="bio-img">Upload image</label>
                    <label htmlFor="name"><h3>Name</h3></label> 
                    <input type="text" name="fname" id="name" value={data.fname} onChange={handleChange} placeholder="First Name" />
                    <input type="text" name="lname" value={data.lname} onChange={handleChange} placeholder="Last Name" />
                    
                    <label htmlFor="DOB"><h3>DOB</h3></label>
                    <input name="dob" id="DOB" type="date" value={data.dob} onChange={handleChange} />

                    <label htmlFor="contact"><h3>Contact Details</h3></label>
                    <input type="text" name="phone" id="contact" value={data.phone} onChange={handleChange} placeholder="Phone no" />
                    <input type="email" name="email" id="" value={data.email} onChange={handleChange} placeholder="Email" />
                    
                    <label htmlFor="language"><h3>Mother tounge</h3></label>
                    <input type="text" name="mTounge" id="language" value={data.mTounge} onChange={handleChange} placeholder="Mother tounge" /> 

                    <label htmlFor="overview"><h3>OverView</h3></label>
                    <input type="text" name="work" id="overview" value={data.work} onChange={handleChange} placeholder="Work detail" /> 
                    <input type="text" name="grad" value={data.grad} onChange={handleChange} placeholder="Degree" /> 
                    <select name="veg" value={data.veg} onChange={handleChange} >
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>

                    <label htmlFor="fam"><h3>Family</h3></label>
                    <input type="text" name="fatherName" id="fam" value={data.fatherName} onChange={handleChange} placeholder="Father name" /> 
                    <input type="text" name="fatherOcc" value={data.fatherOcc} onChange={handleChange} placeholder="Fathers occupation if any.." /> 
                    <input type="text" name="motherName" value={data.motherName} onChange={handleChange} placeholder="Mothers name" /> 
                    <input type="text" name="motherOcc" value={data.motherOcc} onChange={handleChange} placeholder="Mothers occupation if any.." />
                    <label htmlFor="fam-sib">Siblings</label>
                    <select name="sibl" id="fam-sib" value={data.sibl} onChange={handleChange} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <label htmlFor="belief"><h3>Belief</h3></label>
                    <input type="text" id="belief" placeholder="" /> 
                    <button name="belief" value="" onClick={handleClick}>Add</button>

                    <label htmlFor="about"><h3>About</h3></label>
                    <textarea type="text" name="about" id="about" value={data.about} onChange={handleChange} placeholder="About yourself" /> 

                    <label htmlFor="expect"><h3>Expectation</h3></label>
                    <textarea type="text" name="expectn" id="expect" value={data.expectn} onChange={handleChange} placeholder="About yourself" /> 
                </div>
                
                <div className="sneak">
                    <div className="peak">
                        <Preview name={props.location.state.name} data={data} />
                        <button onClick={openSneak}>preview</button>
                    </div>
                </div>

                <div className="view">
                    <div className="peak" hidden={hidden} >
                        <button onClick={createPdf}>Download</button>
                        <button onClick={openSneak}>X</button>
                        <Preview name={props.location.state.name} data={data} />
                        
                    </div>
                </div>
            </div>
        </div>
    
  )
}
 
export default Template
 