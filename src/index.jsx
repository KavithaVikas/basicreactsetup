import React from 'react';
import {render} from 'react-dom'
import NotificationComponent from './NotificationComponent.jsx'

class App extends React.Component {
  render () {
    return (
    <div>
    <p> Welcome To React Kavitha!!</p>
    <NotificationComponent/>
    </div>
    )

  }
}

render(<App/>, document.getElementById('app'));