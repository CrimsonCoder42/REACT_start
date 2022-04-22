import logo from './logo.svg';
import './App.css';
import render from 'dom-serializer';

function Header() {
  return (
    <header>
      <img src="./React-icon.png" alt="react Logo" width="100" height="100"/>
      <h1>Reasons I'm excited to Learn React</h1>
    </header>

  )
  
}


function Page() {
  return (
  <div> 
    <Header />
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

function Footer(){
  return (
    <div>{(new Date().getFullYear())} Anderson development. All rights reserved</div>

  )
}
 

function App() {

}

export {App, Page, Footer} ;
