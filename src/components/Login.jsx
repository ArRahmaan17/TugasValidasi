import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
        if (e.target.value.length === 0) {
            this.setState({
                error: "Maaf, Email tidak boleh kosong"
            })
        }
    }
    handlePass = (e) => {
        this.setState({
            pass: e.target.value
        })
        console.log(this.state.pass)
        if (e.target.value.length === 0) {
            this.setState({
                error: "Password Harus lebih dari 0"
            })
        } else if (e.target.value.length < 8) {
            this.setState({
                error: "Passwprd kurang dari 8"
            })

        } else {
            this.setState({
                error: ""
            })
        }
    }
    render() {
        return (
            <div className="Form">
                <form action="">
                    <label htmlFor="">Email</label><br />
                    <input type="email" onKeyUp={this.handleEmail} /><br />
                    <label htmlFor="">Password</label><br />
                    <input type="password" onChange={this.handlePass} /><br /><span>{this.state.error}</span><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;