import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';
import {Card} from 'material-ui/Card'

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      userData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    // {Auth.isUserAuthenticated() ? (
    // if(Auth.isUserAuthenticated())
    // {
    const xhr = new XMLHttpRequest();
    console.log('dashboard xhr');
    xhr.open('get', '/profile');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
        });
      } else {
        console.log('something broke');
      }
    });
    xhr.send();
    // }
  }

  /**
   * Render the component.
   */
  render() {
    return (
    <Card>
    <Dashboard secretData={this.state.secretData} />
    </Card>
    );
  }
}

export default DashboardPage;
