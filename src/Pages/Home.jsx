import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login';
import { withRouter } from 'react-router-dom';

import '../Styles/home.css';

class Home extends Component{


  responseGoogle = (response) => {
    const {setLogin} = this.props;
    const { location, history } = this.props;
    const firstName = response.profileObj.givenName;
    const profile_pic_url = response.profileObj.imageUrl;
    setLogin(firstName, profile_pic_url);
    history.push('/profile');
  }

  render(){
    return(
      <>
        <i className="fa fa-google google-bg"/>
        
        <div className="google-bttn">
        <h3>Socionity Test</h3>
        <GoogleLogin
          clientId="700372399022-cu6a1slttjlvmseuk14uumn06m1bpub4.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </div>
      </>
    )
  }
}

export default withRouter(Home);