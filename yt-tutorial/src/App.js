import logo from './logo.svg';
import './App.css';
import render from 'dom-serializer';


function Page() {

  return(
  <div> 
  
  <img src="../public/logo192.png" alt="react Logo" width="100" height="100"></img>

      <h1>Reasons I'm excited to Learn React</h1>
      <ul> 
        <li>It's modular and easy for a group to work on </li>
        <li>It's one of the more popular frameworks out here </li>
        <li>Has over 100K stars on Github </li>
        <li>Is maintained by Facebook </li>
        <li>Powers thousands of enterprise apps, including mobile apps. </li>
      
      </ul>

    </div>

  )
    
  
}
 

function App() {

}

export {App, Page} ;
