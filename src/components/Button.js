import './Button.css';


function Button(props) {
    return(
        <div className={`button ${props.border ? "border" : ""}`}>
            <a href={props.link}>{props.label}</a>
        </div>
    );
}


export default Button;