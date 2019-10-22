import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>Full Name</th>
        <th>Birthdate</th>
        <th>Position</th>
        <th>Description</th>
        <th>Works part-time</th>
        <th>Delete user</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.teamData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.firstname + " " + row.lastname}</td>
        <td>{row.birthdate}</td>
        <td>{row.position}</td>
        <td>{row.description}</td>
        <td>{row.parttime}</td>
        <td>
          <button className="btn btn-primary" onClick={() => props.removeTeam(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render () {
    const { teamData, removeTeam } = this.props

    return (
      <table className="table">
        <TableHeader />
        <TableBody teamData = { teamData } removeTeam={removeTeam} />
      </table>
    )
  }
}

export default Table
