// import logo from './logo.svg';
import './App.css';
import Panels from './components/panels/Panels.jsx';
import Sidebar from './components/common/sidebar/Sidebar.jsx';
import Content from './components/common/content/Content.jsx'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Sidebar/>
      <Content/>
    </div>

  );
}

export default App;
