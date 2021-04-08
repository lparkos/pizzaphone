import { Component, useState } from "react";
import styles from './Form.module.css';


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

const CustomForm = (props) => {

    // States
    const [newCustState, setCustState] = useState(false);
    const [newInputState, setInputstate] = useState(false);
    const [newCustomer, setNewCustomer] = useState("");

    // Saving new customers
    const handleProjectOwner = (event) => {
        setNewCustomer((newCustomer) => ({
            ...newCustomer,
            projectOwner: event.target.value,
        }));
    };

    // Sending customer data to dashboard
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    // Hide/Show logic
    const handleNewUser = () => {
        setCustState(true);
    };

    const saveNewUser = () => {
        setCustState(false);
        setInputstate(false);
    };

    const showInput = () => {
        setInputstate(true);
    };

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control 
                        value={props.value} 
                        onChange={handleChange}
                        placeholder="What's the project name?" 
                    />
                </Form.Group>

                <InputGroup>
                    <FormControl
                        value={props.value} 
                        onChange={handleProjectOwner}
                        onKeyDown={showInput}
                        placeholder="What's your name?"
                    />
                    {newInputState ? 
                        <Dropdown.Item onClick={handleNewUser} className={styles.inputBG}>Add {newCustomer.projectOwner}</Dropdown.Item>
                    : null}
                </InputGroup>

                {newCustState ? 
                <Form.Group className={styles.formbg}>
                    <Form.Control className={styles.inputbgSAVE} value={newCustomer.projectOwner} />
                    <Button className={styles.buttonStyle} onClick={saveNewUser}>Save</Button>
                </Form.Group>
                : null}
            </Form>
        </div>
    );
};
export default CustomForm;