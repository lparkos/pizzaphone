import React from "react";
import './rows.scss';
import anime from 'animejs';
import data from '../data';

class Hires extends React.Component {
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
		duration: 200,
		height: 420,
		translateY: 0,
        easing: 'linear',
	    });
	}

	animateRowOut = () => {
		anime({
		targets: this.row.current,
		opacity: [1, 0],
		translateY: 100,
		height: 0,
		duration: 150,
        easing: 'linear',
		});
	}

	//Animate Card
	animateCardIn = () => {
		anime({
			targets: '.hires',
			opacity: [0,1],
			translateX: 0,
			duration: 100,
            scale: 1,	
            easing: 'spring(1, 80, 100, 0)',
        });
	}

	animateCardOut = () => {
		anime({
			targets: '.hires',
			opacity: [1,0],
			translateX: 400,
			duration: 100,
            delay: anime.stagger(300)
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
				<div ref={this.row} className="card hires">
	
						{data.map((data) =>
							<div className="large hires"><img alt="" src={data.hires}/></div>
						)}
					
				</div>
			</div>
		);
	}
}

export default Hires;
