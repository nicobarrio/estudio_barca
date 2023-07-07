import './Button.css'

const Button = (props) => {
    return (
        <div class="button">
            <button>{props.button}</button>
        </div>
    );
}

export default Button