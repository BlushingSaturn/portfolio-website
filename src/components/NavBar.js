import './NavBar.css';


function NavBar(props) {
    return (
        <div className='nav'>
            <a href='https://google.com' className={`${props.activeHome ? "active" : ""}`}>Home</a>
            <a href='https://google.com' className={`${props.activePortfolio ? "active" : ""}`}>Portfolio</a>
            <a href='https://google.com' className={`${props.activeResume ? "active" : ""}`}>Resume</a>
            <a href='https://google.com' className={`${props.activeContact ? "active" : ""}`}>Contact</a>
        </div>
    );
}


export default NavBar;