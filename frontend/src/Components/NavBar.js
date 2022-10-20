import './NavBar.css'

const navBar = () =>
{
    return (
        <header>
        <a href="/home">
            <img class="nav-logo" src="https://skills-cityportal.com/pluginfile.php/1/theme_tltitan/headerlogo/1655987184/in4-circle-logo-100x100.png" alt="logo" />
        </a>
        <nav>
        
            <ul class="nav-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/departments">Departments</a></li>
                <li><a href="/qualifications">Qualifications</a></li>
                <li><a href="/employees">Employees</a></li>
               
            </ul>
        </nav>
       
    </header>
    )
}

export default navBar;