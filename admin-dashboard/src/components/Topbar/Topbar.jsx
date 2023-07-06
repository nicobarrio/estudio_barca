import './Topbar.css'; 
import Searcher from './subcomponents/Searcher/Searcher.jsx';

const Topbar = (props) => {
    return (
        <div>
            <div>
                <h1>Welcome, {props.name} </h1>
            </div>
            <Searcher />
        </div>
    )
}

export default Topbar;