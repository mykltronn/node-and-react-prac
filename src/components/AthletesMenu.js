import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AthletesMenu extends Component {
    render() {

        return (
            <nav className="athletes-menu">
                {this.props.athletes.map(menuAthlete => {
                    return <NavLink key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
                        {menuAthlete.name}
                    </NavLink>
                })}
            </nav>
        )
    }
}
