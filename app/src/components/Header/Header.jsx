import logo from '../../Logo.svg';

let Header = () => {
    return(
        <header>
            <img id='header-logo' src={logo} alt="Logo"/>
            <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </header>
    )
}
export default Header;