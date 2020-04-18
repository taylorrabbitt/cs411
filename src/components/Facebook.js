import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name: '',
    }

    componentClicked = () => {
        console.log('facebook btn clicked');
    }

    fbResponse = (response) => {
        console.log('Facebook was clicked');
    }

    render() {
        let facebookData
        if(this.state.auth)
        {
            facebookData = (
            <div>
                Hi!
            </div>
            )
        }
        else
        {
            facebookData = (
                <FacebookLoginBtn
                    appId = "1088597931155576"
                    autoLoad={true}
                    fields="name"
                    onClick={this.componentClicked}
                    callback={this.fbResponse} 
                />
            )
        }
        return (
            <>
                {facebookData}
            </>
        );
    }
}