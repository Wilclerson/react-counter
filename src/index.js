import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; // ES6

const root = ReactDOM.createRoot(document.getElementById('root'));

function SimpleCounter(props){
  return (<div className="bigCounter">
    <div className="calendar">
    <FontAwesomeIcon icon={fas.faClock} />
    </div>
    <div className="four">{props.digitFour % 10}</div>
    <div className="three">{props.digitThree % 10}</div>
    <div className="two">{props.digitTwo % 10}</div>
    <div className="one">{props.digitOne % 10}</div>
  </div>);
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};

let counter = 0;

setInterval(function(){
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  console.log(four, three, two, one);

  counter++;

  root.render(
      <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>
  );
},1000);