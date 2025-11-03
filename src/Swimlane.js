import React from 'react';
import './Swimlane.css';

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      let cardClass = 'card backlog-card';
      if (client.status === 'in-progress') cardClass = 'card inprogress-card';
      else if (client.status === 'complete') cardClass = 'card complete-card';

      return (
        <div key={client.id} className={cardClass}>
          <div><strong>{client.name}</strong></div>
          <div>{client.description}</div>
        </div>
      );
    });

    // ✅ move the lane class to the same div as dragulaRef
    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div
          className={`Swimlane-dragColumn ${this.props.className}`}
          ref={this.props.dragulaRef}
        >
          {cards}
        </div>
      </div>
    );
  }
}
