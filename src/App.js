
import './App.css';
import Headerr from './Reusables/Components/Header/Headerr';
 import Button from './Reusables/Button';
 import Page from './Home/Page';
import LatestArticle from './Home/LatestArticle';
import {SiJavascript} from "react-icons/si";
import  {AiOutlineDoubleRight} from  "react-icons/ai";
import {DiReact} from "react-icons/di";
import {SiStorybook} from "react-icons/si"
import {MdChatBubbleOutline} from "react-icons/md"
 

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
    <div className = "one-column" style={{ borderLeft: '8px solid #CCA9F4', height:'230px', backgroundColor: '#1C2A34', borderRadius: '10px', boxShadow: '#111A20', padding: '15px'}}>
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
    {/* <div className = "columns"> */}
    <div classname = "two" style={{ borderLeft: '8px solid #81F59B', height:'230px', backgroundColor: '#1C2A34', borderRadius: '10px', boxShadow: '#111A20', padding: '15px' }}>
    <header
     > Stockstream.tv </header>
     <h6 style = {{fontWeight:'lighter', fontSize: '14px'}}>On a mission to democratize investing knowledge. My partner and I bootstrapped this company with zero funding."</h6>
     <Button
    title = "Button"
    backgroundColor = "#1A2832"
    color = "white"
    borderRadius = "3px"
    height = "10%"
    borderMargin = "solid"/>
     </div>
    <div className = "three" style={{ borderLeft: '8px solid #D9534D', height:'230px', backgroundColor: '#1C2A34', borderRadius: '10px', boxShadow: '#111A20', padding: '15px' }} >
      <header>
        All Turtles
      </header>
      <h6 style = {{fontWeight:'lighter', fontSize: '16px'}}>I lead web development full time at All Turtles, an AI startup studio.</h6>
      <Button
    title = "Button"
    backgroundColor = "#1A2832"
    color = "white"
    borderRadius = "3px"
    height = "10%"
    borderMargin = "solid"/>
    </div>
    <br></br>
   
    
</div>
<h2 className = "work">What are you working on?</h2>
    {/* </div> */}
    <h4 style ={{ fontSize :"11px", textAlign : "center"}}>Let's have a Conversation! I'd love to hear about what you're<br></br> working on and find a way to work together.</h4>
    {/* <p  > */}
    <br></br>
      <Button
   logo={<MdChatBubbleOutline color="#111A20"/>}
    backgroundColor = '#83F9A2'
    height = "30px"
    borderRadius = "5px"
    title = "chat"
    width = "5%"
    color = '#111A20'
    fontWeight = '800'
    marginLeft = "47%"
  
  />
  {/* </p> */}

      </div>
  )
}

export default App;
