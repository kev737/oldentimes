import logo from './logo.svg';
import './App.css';
import ClassicsTable from './components/ClassicsTable';
import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">Old Timey</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            A Site for Sore Eyes
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <ClassicsTable/>
      <Navbar>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Made for Dad!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
