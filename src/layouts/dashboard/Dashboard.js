import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong>
            If you're seeing this page, you've logged in with UPort successfully.
            Now you can download pictures from Harpreet: </p>
            <p><a href="https://docs.google.com/document/d/1HKf4IHenvBP-jgN_7KQAc_HlVtHDjv5SDS4fWCxzFH0/edit?usp=sharing">
            HyperHarps</a></p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
