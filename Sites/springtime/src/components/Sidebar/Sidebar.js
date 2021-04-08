import { Component, useState } from "react";

// Bootstrap Components
import Button from 'react-bootstrap/Button';
import CustomForm from '../Form/Form';

const Sidebar = (props) => {

    const closeSidebar = (event) => {
        return !props.state;
    };

    return (
        <div className="w-25 p-3 bg-light">
            {props.state ? null :
                <CustomForm />
            }
            <Button onClick={props.closeSidebar}>Submit</Button>
        </div>
    );
};
export default Sidebar;