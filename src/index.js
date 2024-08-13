import _ from 'lodash';
import './style.css';
import StarIcon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // Lodash, nopw imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // add image to existing div 
  const myIcon = new Image();
  myIcon.src = StarIcon;
  
  element.appendChild(myIcon);
  
  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());