
const page = (
    <div> 
    <h1 className = "header"> This is JSX </h1>
    <p>This is a paragraph </p>
    
    </div>
)


const navBar = (
    <div> 
    
    <nav> 
        <h1>DevCo</h1>
            <ul>
                <li>Pricing </li>
                <li>About </li>
                <li>Contact </li>
            </ul>
    </nav>
    
    </div>
)

const combo = [navBar, page]


ReactDOM.render(
    combo
    , document.getElementById("root"))