import React, { Component } from 'react';
import './compact.scss';
import Instructors from '../rows/instructors';
import Training from '../rows/training';


class Compact extends Component {
    render() {
        return (
                <div className="compact">
                    <div className="slide">
                        <Instructors title="Instructor Videos" />
                        <Training title="Training Videos" />
                </div>
                </div>
            )
        }
    }
    
export default Compact