  /*      File Name   : User.js
          Date        : 31st May 2020
          Description : This is the User.js file which displays the avatarURL .
  */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class User extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <img src={user.avatarURL} className='avatar' alt={`Avatar of ${user.name}`}/>
        <span>{user.name}</span>
      </Fragment>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps ({ users }, { id }) {
  return {
    user : users[id]
  }
}


export default connect(mapStateToProps)(User)
