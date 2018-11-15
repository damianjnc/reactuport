import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Harrison, Good to Go!</h1>
            <p>Your Dapp is installed and ready.</p>
            <h2>UPort Authentication</h2>
            <p>This particular website comes with UPort authentication built-in.</p>
            <p>In the upper-right corner, you'll see a login button. Click it to login with UPort. There is an authenticated route, "/dashboard", that displays the UPort user's name once authenticated.</p>
      </div>
        </div>
      </main>
    )
  }
}

export default Home
