import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    team: [],
    shown: false,
  }


  removeTeam = index => {
    const { team } = this.state

    this.setState({
      team: team.filter((team, i) => {
        return i !== index
      }),
    })
  }


  handleSubmit = teammate => {
    this.setState({team: [...this.state.team, teammate]});
  }

  render() {
    const { team } = this.state

    return (
      <div>
      <div className="logobar">
          <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
            <h1>Team Tracker</h1>
      </div>
      <div className="container">
        <div className="table-responsive">
        <Table teamData={team} removeTeam={this.removeTeam} />
        <br />
        </div>
        <div className="formbox">
          <button className="btn btn-primary" onClick={() => this.setState({ shown: !this.state.shown})}>Add a team member (toggle)</button>
          {this.state.shown && <Form handleSubmit={this.handleSubmit} />}
        </div>
      </div>
      </div>
    )
  }
}

export default App
