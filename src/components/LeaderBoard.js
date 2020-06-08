   /*     File Name   : leaderboard.js
          Date        : 31st May 2020
          Description : This is the leaderboard.js file which is a component file for the main screen
  */

import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

function Leaderboard(props) {
  const { users } = props;
  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Profile</th>
            <th>User</th>
            <th>Questions Asked</th>
            <th>Questions Answered</th>
          </tr>
        </thead>
        <tbody>
        <br></br>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td><img src={user.avatarURL} className='avatar' alt={`Avatar of ${user.name}`}/></td>
              <td>{user.name}</td>
              <td>{user.questions.length}</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  )
}

Leaderboard.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = ({ users }) => {
  const userScore = user =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a))
  }
};

export default connect(mapStateToProps)(Leaderboard)
