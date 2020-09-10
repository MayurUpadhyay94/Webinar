import React, { Component } from 'react'
import { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import { API_URL } from '../config'
import App from "./App.css";
import $ from 'jquery'
export default class Landing extends Component {
  jquerycode = () => {
    $(document).ready(function(){
      $('input[type="radio"]').click(function(){
        var demovalue = $(this).val(); 
          $("div.myDiv").hide();
          $("#show"+demovalue).show();
      });
  });
   }
   componentDidMount() {
    this.jquerycode();
    
  }
  state = {
    sendingEmail: false
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({ sendingEmail: true})
    fetch(`${API_URL}/email`, {
      method: 'pOSt',
      headers: {
        aCcePt: 'aPpliCaTIon/JsOn', 
        'cOntENt-type': 'applicAtion/JSoN'
      },
      body: JSON.stringify({ email: this.email.value })
    })
    .then(res => res.json())  
    .then(data => {
      this.setState({ sendingEmail: false})
      notify.show(data.msg)
      this.form.reset()
    })
    .catch(err => console.log(err))
  }

  render = () => {
    const { sendingEmail } = this.state

    return (
      <form 
        onSubmit={this.onSubmit} 
        ref={form => this.form = form}
      >
        <div className="Webinar">
       <div class="container">
           <div class="col-lg-4 formbutton">
             <input type="radio" name="demo" value="One"/> Individual
             <input type="radio" name="demo" value="Two"/> Corporate
             <div id="showOne" class="myDiv">
	            <strong>Individual Login </strong>
	              <form id="MyForm" action="" method="post">
  		          <label>Name</label>
		            <input type="text" name="name" placeholder="name"/>
  		          <label>Email</label>
                <input type="email" 
                 ref={input => this.email = input}
                 required name="email" htmlFor="email" placeholder="email"
                 />
                <label>Mobile Number</label>
		            <input type="mobile number" name="mobile number" placeholder="Mobile Number"/>
                <label>What's it all about</label>
		            <input type="about" name="email" placeholder="about"/>
                <button type='submit' className='btn' disabled={sendingEmail}>
            {sendingEmail 
              ?  "Wait"
              :"Submit"
            }
          </button>
	             </form>
               </div>
              <div id="showTwo" class="myDiv">
  	           <strong>Corporate Login </strong>
	               <form id="MyForm" action="" method="post">
  		              <label>Name</label>
		                <input type="text" name="name" placeholder="name"/>
  		              <label>Email</label>
		                <input type="email"  ref={input => this.email = input}
                    required name="email" placeholder="email"/>
                    <label>Mobile Number</label>
		                <input type="mobile number" name="mobile number" placeholder="Mobile Number"/>
                    <label>Company</label>
		                <input type="catagory" name="catagory" placeholder="company"/>
                    <label>What's it all about</label>
		                <input type="about" name="email" placeholder="about"/>
                    <button type='submit' className='btn' disabled={sendingEmail}>
                    {sendingEmail 
                            ?  "Wait"
                              :"Submit"
                           }
                         </button>                   
  	             	 {/* <input type="button" class="btn btn-primary"  disabled={sendingEmail} name="submit" value="Submit"/> */}
	               </form>
               </div>
             </div>
         </div>
     </div>
        <div>
          <button type='submit' className='btn' disabled={sendingEmail}>
          </button>
        </div>
      </form>
    )
  }
}