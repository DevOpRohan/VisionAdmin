// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
 Route, Link } from "react-router-dom";

// Import other React Component
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/createTask"} className="nav-link">
                  Task Management
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/createTask"} className="nav-link">
                    Create Task
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/taskList"} className="nav-link">
                    Task List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={CreateTask} />
                  <Route path="/createTask" component={CreateTask} />
                  <Route path="/editTask/:id" component={EditTask} />
                  <Route path="/taskList" component={TaskList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;