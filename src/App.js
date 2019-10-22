import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import logo from './logo.png';
import Footer from './Footer';

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
      <div id="logobar">
        <ul>
          <li><img src={logo} alt="Logo" width="100px" height="100px"/></li>
          <li><h1>Team Tracker</h1></li>
          </ul>
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
      <div><Footer /></div>
      </div>
    )
  }
}

export default App
