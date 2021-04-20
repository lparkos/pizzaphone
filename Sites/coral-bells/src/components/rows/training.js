import React from "react";
import './rows.scss';
import anime from 'animejs';
import data from '../data';

class Training extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: true
		};
	}

	row = React.createRef();

	// Animate Row
	animateRowIn = () => {
		anime({
		targets: this.row.current,
		opacity: [0, 1],
		duration: 100,
		height: 500,
		translateY: 0,
		scale: 1,
		endDelay: 400,
		});
	}

	animateRowOut = () => {
		anime({
		targets: this.row.current,
		opacity: [1, 0],
		translateY: 100,
		height: 0,
		duration: 900
		});
	}

	// Animate Card
	animateCardIn = () => {
		anime({
			targets: '.training',
			opacity: [0,1],
			translateY: 0,
			scale: 1,
			duration: 300,
			delay: anime.stagger(100) // increase delay by 100ms for each elements.
		});
	}

	animateCardOut = () => {
		anime({
			targets: '.training',
			opacity: [1,0],
			translateY: 20,
			scale: 1.3,
			duration: 200,
			delay: anime.stagger(50) // increase delay by 100ms for each elements.
		});
	}

	toggleRow = () => {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});

		if (!opened) {
			this.animateRowIn();
			this.animateCardIn();
		} else if (opened) {
			this.animateRowOut();
			this.animateCardOut();
		}
	}


	render() {
		var { title } = this.props

		return (
            <div className="row">
				<div className="title-container">
                	<p>{title}</p>
					{ this.state.opened ? <img src="./img/Close.png" alt="close" onClick={this.toggleRow}></img> : <p className="show-text" onClick={this.toggleRow}> Unhide Row</p> }
				</div> 
				<div ref={this.row} className="card">
	
						{data.map((data) =>
							<div className="small training"><img alt="" src={data.training}/></div>
						)}
					
				</div>
			</div>
		);
	}
}

export default Training;
