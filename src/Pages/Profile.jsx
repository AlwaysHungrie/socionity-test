import React, {Component} from 'react';
import '../Styles/profile.css';
// import { withRouter } from 'react-router-dom';

// class Profile extends Component {
//     render(){
//         const { location, history } = this.props;
//         return(
//           {history.push('/a')}
//         )
//     }
// }
// export default withRouter(Profile);

class Profile extends Component{
  render(){
    const {first_name, profile_pic_url} = this.props;
    const url = `url(${profile_pic_url})`;
    return(
      <>
      <div className="navigation">
      <div className="navigation-logo" style={{background:url}}>{first_name[0]}</div>
      <div className="navigation-links">
        <div className="navigation-link" style={{marginTop: "6rem"}}>Biography</div>
        <div className="navigation-link">Experience</div>
        <div className="navigation-link">Skills</div>
        <div className="navigation-link">Get in Touch</div>
      </div>

      <div className="navigation-footer">
        <p>Feel free to send me a message if you want to enhance your recruitment department.</p>
        <div className="navigation-download">Download Resume</div>
      </div>
    </div>

    <div className="landing">
      <div className="dual-text">
        <div className="center-text">{first_name}</div>
        <div className="center-text-half">{first_name}</div>
      </div>
    </div>

    <div className="biography">
      <h3>
        Self-driven and proactive Recruiting Manager with a passion for creative problem-solving methods.
      </h3>
      <p>
        Experienced Recruiting Specialist with years of experience in hiring process management and recruitment procedure monitoring, developer of cross-company work force allocation strategies, a true team leader & most importantly, a good friend.Currently working at the Softworks Verity Technologies LTD as a senior Human Resources Manager and Digital Business Automation Specialist, with more than twenty teams in her official jurisdiction.
      </p>
    </div>

    <div className="experience">
      <h3>Experience</h3>

      <div className="experience-card">
        <div className="head">
          <div className="job-title"> Recruiting Manager</div>
          <div className="job-company">The RMR Group Inc., Helsinki, Finland</div>
          <div className="job-details-visible">Hide</div>
        </div>
        <div className="body">
          <ul>
            <li>Oversaw all hiring processes and procedures from start-to-finish interviewing, recruiting, and onboarding of all new staff</li>
            <li>Maintained professional relationships with employment agencies</li>
            <li>Created seminars and presentations; participated in weekly meetings with executives</li>
          </ul>
        </div>
      </div>
    </div>
      </>
    )
  }
}

export default Profile;