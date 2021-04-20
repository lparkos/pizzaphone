import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import './toggleRow.scss';



class ToggleRow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: true,
		};
		this.toggleRow = this.toggleRow.bind(this);
	}

  
	toggleRow() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		return (
            <div className="title">
                <p>{title}</p>
                <button onClick={this.toggleRow}>Close</button>
                <CSSTransition in={opened} timeout={500} classNames="card">	
                    <div>
                        {children}
                    </div>
                </CSSTransition>
			</div>
		);
	}
}

export default ToggleRow;