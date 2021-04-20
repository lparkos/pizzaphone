import React from 'react';
import './cards.scss';
import anime from 'animejs';



class Training extends React.Component {

    render() {;
            if (this.props.state){
                anime({
                    targets: '.small',
                    opacity: [0,1],
                    translateY: 0,
                    scale: 1,
                    duration: 300,
                    delay: anime.stagger(100) // increase delay by 100ms for each elements.
                });
            } else {
                anime({
                    targets: '.small',
                    opacity: [1,0],
                    translateY: 20,
                    scale: 1.3,
                    duration: 200,
                    delay: anime.stagger(300) // increase delay by 100ms for each elements.
                });
            }
        return (
                <div className="card" >
                    <img alt="" className={this.props.size} src={this.props.src} />
                </div>
            );
            
        }
 
}

export default Training
