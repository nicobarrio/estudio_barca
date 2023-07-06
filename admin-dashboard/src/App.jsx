// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/common/Sidebar/Sidebar.jsx';
import Content from './views/Content/Content.jsx'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>

  );
}

export default App;
