
import './App.css';
import Headerr from './Reusables/Components/Header/Headerr';
 import Button from './Reusables/Button';
 import Page from './Home/Page';
import LatestArticle from './Home/LatestArticle';
import {SiJavascript} from "react-icons/si";
import  {AiOutlineDoubleRight} from  "react-icons/ai";
import {DiReact} from "react-icons/di";
import {SiStorybook} from "react-icons/si"
 

const App = ()=> {
  return (
    <div className="App">
      
      <Page/>
      <br></br>
      <h1> <br></br>I’m Joy, software engineer
      <br></br>
and a Medical Doctor.</h1>
      
      <h5>I specialize in building applications with html, css, <br></br>and javascript and backend languages like Java and Python. <br></br>I commit code to <a className="git"
       href = "https://github.com/favouredjay" >Github,</a>  and take shots on Dribbble.</h5>
       <br></br>
       <div className="article-header">
         <h3 className = "left-side">Latest Articles</h3>
         <div className = "right-side"><span>All articles</span>   <AiOutlineDoubleRight/></div>

       </div>
      
       

       <div><LatestArticle
      logo = { <SiJavascript color = "#F7DF1E"/>}
       title = "Reducing Cognitive Load By theming my tools " date = "September 08, 2019"/></div>
       <div> <LatestArticle
      logo = { <DiReact color = "#61DAFB"/>}
       title = "Code splitting & lazy loading a server side rendered React app" date = "September 08, 2019"/></div>
      <div> <LatestArticle
      logo = { <SiStorybook color = "#FF4785"/>}
       title = "Easy project switching with Itermocil & command line shortcuts " date = "September 08, 2019"/></div> 
  <br></br>
  <br></br>
    <div className ="projects-header">Projects</div>
    <br></br>
  
    <div className ="container">
    <div className = "one-column"className ="first-project" style={{ borderLeft: '8px solid #CCA9F4', width: '40%', height:'150px', marginLeft:'25%', textAlign:'justify' }}>
    <header>Yawnech</header>
    <h6 style = {{fontWeight:'lighter', fontSize: '14px'}}>An online co-working community for Indie hackers, enterpreneurs, and founders Chat live with app developers, designers and mentors. Access video course and tutorials. </h6>
    <Button
    title = "Button"
    backgroundColor = "#1A2832"
    color = "white"
    borderRadius = "3px"
    height = "10%"
    borderMargin = "solid"/>
    
    </div>
    <br></br>
    <div style = {{ borderLeft: '8px solid #81F59B', width: '20%', height:'150px',marginLeft:'25%', textAlign:'justify' }}>
    <header
     > Stockstream.tv </header>
     <h6 style = {{fontWeight:'lighter', fontSize: '12px'}}>On a mission to democratize investing knowledge. My partner and I bootstrapped this company with zero funding."</h6>
     <Button
    title = "Button"
    backgroundColor = "#1A2832"
    color = "white"
    borderRadius = "3px"
    height = "10%"
    borderMargin = "solid"/>
     </div>
    <div className="three-column"></div>

    </div>
      

     
      

    </div>
  )
}

export default App;
