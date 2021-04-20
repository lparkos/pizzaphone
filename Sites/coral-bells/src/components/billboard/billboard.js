import React, { Component } from 'react';
import './billboard.scss';
import Instructors from '../rows/instructors';
import Hires from '../rows/hires';


class Billboard extends Component {
    render() {
        return (
                <div className="compact">
                    <div className="slide">
                        <Hires title="Training Programs" />
                        <Instructors title="Your Favorite Instructors" />
                    </div>
                </div>
            )
        }
    }
    
export default Billboard