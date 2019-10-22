import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    team: [],
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
      <div className="container">
        <h1>Team Tracker</h1>
        <div className="table-responsive">
        <Table teamData={team} removeTeam={this.removeTeam} />
        </div>
        <div className="formbox">
          <h2>Add a new team member:</h2>
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default App
