import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

// Custom Components
import Sidebar from './components/Sidebar/Sidebar';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CustomForm from './components/Form/Form';
import Customerdash from './components/CustomerDash/Customerdash';

const App = () => {
  const [sidebarState, setSidebar] = useState(false);
  const [dashState, setDashState] = useState(false);
  const [projectName, setName] = useState("");

  // Gets child data and sends to dashboard
  function handleChange(newName) {
    setName(newName);
  }

  // Hide/show logic
  const openSidebar = (event) => {
    setSidebar(true);
  };

  const closeSidebar = (event) => {
    setDashState(true);
    setSidebar(false);
  };  

  return (
    <div className={styles.appBG}>
      
      <Container className={styles.projectbg}>
        <Button className={styles.buttonStyle} onClick={openSidebar}>Start new project</Button>
      </Container>

        {sidebarState ? 
        <div className={styles.drawerpanel}>
          <CustomForm onChange={handleChange}/>
          <Button className={styles.buttonStyle2} onClick={closeSidebar}>Submit</Button>
        </div>
        : null}

        {dashState ? 
          <Customerdash className={styles.dash} projectName={projectName}/>
        : null}
       
    </div>
  );
}

export default App;
