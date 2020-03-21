import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="four columns">
            <img className="profile-pic"  src={profilepic} alt="Kha Shing Profile Pic" />
         </div>
         <div className="eight columns main-col">
            <h2>About Me</h2>
            <p style={{color:'#A9A9A9'}}>{bio}</p>
            
            <div className="row">
               <div className="nine columns">
                  <h2>Don't hesitate to contact me!</h2>
                  {/* <p className="address"> */}
						   {/* <span>{name}</span><br /> */}
						   {/* <span>{street}<br />
						         {city} {state}, {zip} */}
                   {/* </span><br /> */}
                     <span style={{color:'white'}}> <b> Phone Number: </b> </span>
                     <span style={{color:'#A9A9A9'}}> {phone} </span>
                     <br />

                     <span style={{color:'white'}}> <b> Email: </b> </span> 
                     <span style={{color:'#A9A9A9'}}> {email} </span>
                     <br />
					   {/* </p> */}
               </div>
               {/* <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
