import './Content.css'
import Topbar from '../../components/Topbar/Topbar.jsx';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import Panel from '../../components/Panel/Panel.jsx';

const Content = () => {
    let arrayCards = [
        {
            number: "30",
            category: "Products"
        },
        {
            number: "23",
            category: "Orders"
        },
        {
            number: "250.000",
            category: "Profit"
        }
    ]

    return (
        <div className="content_box">
            <Topbar name='Nicolás' />    
            <Button button='Create new product'/>
            <div class="cards">
                { 
                arrayCards.map((card, i) => <Card number={card.number} category={card.category}/> ) 
                }
            </div>
            <Panel />    

        </div>
    )
}

export default Content