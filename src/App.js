import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import AddPersonButton from './AddPerson'

class App extends Component {
  state = {
    team: [],
    isEmptyState: true,
  }


  triggerAddPersonState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddPersonState: true
    })
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
          {this.state.isEmptyState && <AddPersonButton addPerson={this.triggerAddPersonState} />}
          {this.state.isAddPersonState && <Form handleSubmit={this.handleSubmit} />}
        </div>
      </div>
    )
  }
}

export default App
