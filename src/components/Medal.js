import React, { Component } from 'react';

const typeMap = {
  'G': 'Gold',
  'S': 'Silver',
  'B': 'Bronze'
};

export default class Medal extends Component {
    render() {
        return (
            <li className="medal">
                <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
                <span className="year">{this.props.year}</span>
                <span className="city">{this.props.citg}</span>
                <span className="event">{this.props.event}</span>
                <span className="category">{this.props.category}</span>
            </li>
        )
    }
}
