import js from '../../public/js.svg';
import css from '../../public/css.svg';
import html from '../../public/html.svg';
import node from '../../public/node.svg';
import reactjs from '../../public/reactjs.svg';
import reactquery from '../../public/reactquery.svg';
import redux from '../../public/redux.svg';
import typescript from '../../public/typescript.svg';
import webpack from '../../public/webpack.svg';
class SkillCard extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const name = this.getAttribute('name');
      let src = '';
      switch(name) {
        case 'javascript': src = js; break;
        case 'HTML': src = html; break;
        case 'CSS': src = css; break;
        case 'ReactJS': src = reactjs; break;
        case 'Redux': src = redux; break;
        case 'React Query': src = reactquery; break;
        case 'Typescript': src = typescript; break;
        case 'Webpack': src = webpack; break;
        case 'NodeJS': src = node; break;
        default: break;
      }
      const size = this.getAttribute('size');

      this.innerHTML = `
        <div class="top">
            <img src="${src}" width="${size}%"/>
        </div>
        <div class="bottom">${name}</div>
      `;
    }
  }
  
  export default SkillCard;
  
