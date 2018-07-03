// JavaScript source code

import React, { Component } from "react";
// import API from "../utils/API";

class usr_Register extends Component {
    state = {
        user_password,
        user_conf_pw,
        user_pw_update_code:null,
        user_pw_update_time:"",
        usr_email,
        usr_firstname,
        usr_lastname,
        usr_addr1,
        usr_addr2,
        usr_city,
        usr_state,
        usr_zip,
        usr_country,
        usr_phone,
        usr_dob,
        usr_tax_doc
    }




    render() {
        return (
            <div className="container-fluid pad-lg-0">
                <div className="row">
                    <form action="/register" method="post">
                        <div className="form-group">
                            <label htmlFor="UserPassword">Set Password</label>
                            <input type="password" className="form-control" id="usrpassword" placeholder="Password" name="password" value={this.state.user_password} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="UserConfPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="userconfpw" placeholder="Confirm Password" name="confpassword" value={this.state.user_conf_pw} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="UserEmail">Email</label>
                            <input type="email" className="form-control" id="useremail" placeholder="Email" name="useremail" value={this.state.usr_email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="FirstName">Password</label>
                            <input type="text" className="form-control" id="firstname" placeholder="First Name" name="usr_firstname" value={this.state.usr_firstname} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" placeholder="Last Name" name="usr_lastname" value={this.state.usr_lastname} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Address1">Address</label>
                            <input type="text" className="form-control" id="address1" placeholder="Address" name="usr_addr1" value={this.state.usr_addr1} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Address2">Address Continued</label>
                            <input type="text" className="form-control" id="address2" placeholder="Address Continued" name="usr_addr2" value={this.state.usr_addr2} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="City">City</label>
                            <input type="text" className="form-control" id="city" placeholder="City" name="usr_city" value={this.state.usr_city} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="State">State/Provine</label>
                            <input type="text" className="form-control" id="state" placeholder="State/Province" name="usr_state" value={this.state.usr_state} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Zip">Zip/Postal Code</label>
                            <input type="text" className="form-control" id="zipcode" placeholder="Zip/Postal Code" name="usr_zip" value={this.state.usr_zip} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Country">Country</label>
                            <input type="text" className="form-control" id="country" placeholder="Country" name="usr_country" value={this.state.usr_country} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone Number</label>
                            <input type="text" className="form-control" id="phonenumber" placeholder="Phone Number" name="usr_phone" value={this.state.usr_phone} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="DateOfBirth">Date of Birth</label>
                            <input type="text" className="form-control" id="dateofbirth" placeholder="Date of Birth" name="usr_dod" value={this.state.usr_dob} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="TaxDoc">Nation Tax ID Number</label>
                            <input type="text" className="form-control" id="taxdoc" placeholder="Tax Document Number" name="usr_tax_doc" value={this.state.usr_tax_doc} onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.registerUser}>Create User Account</button>
                    </form>
                    <div>
                        <h4>Already have an account? <a href="/login">Log in here.</a></h4>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;


    //    handleInputChange = event => {
//        const { name, value } = event.target
//        this.setState({
//            [name]: value
//        });
//    };

//    handleSubmit = event => {
//        event.preventDefault();
//        if (this.state.firstName && this.state.email && this.state.password) {
//            API.registerUser({
//                firstName: this.state.firstName,
//                email: this.state.email,
//                password: this.state.password
//            }).then(res => {
//                console.log(res);
//                this.props.history.push("/");
//            })
//                .catch(err => console.log(err));
//        };
//    };
