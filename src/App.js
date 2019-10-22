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
        <Table teamData={team} removeTeam={this.removeTeam} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
