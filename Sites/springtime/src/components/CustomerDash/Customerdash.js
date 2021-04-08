import { Component, useState } from "react";
import styles from './Customerdash.module.css';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';

const Customerdash = (props) => {

    return (
        <div className={styles.dashbg}>
            <nav data-id="back-link"><a className="back-link-action pl-2">All projects</a></nav>
           <div className={styles.projectname}>{props.projectName}</div> 
           <a className={styles.projectcustomer}>David C | In progress</a>
        </div>
    );
};
export default Customerdash;