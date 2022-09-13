import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab } from "react-bootstrap";

function Bootstrap() {
  return (
    <>
      <h3>Bootstrap Components</h3>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div>Home</div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <div>Profile</div>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <div>Contact</div>
        </Tab>
      </Tabs>

      <Button>Button</Button>
      <Button variant="success">Button</Button>
    </>
  );
}

export default Bootstrap;
