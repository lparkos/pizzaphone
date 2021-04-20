import React from "react";
import './rows.scss';
import anime from 'animejs';
import data from '../data';

class Instructors extends React.Component {
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
		height: 130,
		translateY: 0,
		scale: 1,
		endDelay: 400,
		easing: 'linear',
		});
	}

	animateRowOut = () => {
		anime({
		targets: this.row.current,
		opacity: [1, 0],
		translateY: 100,
		height: 0,
		duration: 100,
		easing: 'linear',
		});
	}

	// Animate Card
	animateCardIn = () => {
		anime({
			targets: '.instructors',
			opacity: [0,1],
			translateY: 0,
			scale: 1,
			duration: 300,
			delay: anime.stagger(100),
			easing: 'spring(1, 20, 10, 0)',
		});
	}

	animateCardOut = () => {
		anime({
			targets: '.instuctors',
			opacity: [1,0],
			translateY: 20,
			scale: 1.3,
			duration: 200,
			delay: anime.stagger(300) ,
			easing: 'linear',
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
							<div className="small instructors"><img alt="" src={data.instructor}/></div>
						)}
					
				</div>
			</div>
		);
	}
}

export default Instructors;
