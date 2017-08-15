import React from 'react';

class NotificationComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {notifyCount : 0};
    this.onNotification = this.onNotification.bind(this);
  }

  onNotification () {
    let newNotifyCount = this.state.notifyCount + 1;
    this.setState({notifyCount: newNotifyCount});
  }

  render() {
    return (
      <div>
        How Many Notification : <span>{this.state.notifyCount}</span>
        <div><button onClick={this.onNotification}>Notification</button></div>
      </div>
    );
  }

}

module.exports = NotificationComponent;