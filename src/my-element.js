import { LitElement, css, html } from 'lit'
import { Child1Element } from './child-1-element'
import { CharacterGetterElement } from './character-getter-element '


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart h1 - The h1
 */
export class MyElement extends LitElement {
  static get properties() {
    return {


      /**
       * The number of times the h1 has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()

    this.count = 0
  }

  myEvent1Handler() {
    this.count++
  }

  newCharacterEventHandler(e) {
    const character = e.detail
    const characterName = character.name
    const characterImg = character.image

    this.shadowRoot.querySelector("#character-name").innerHTML = characterName
    this.shadowRoot.querySelector("#character-img").src = characterImg
    this.shadowRoot.querySelector("#character-species").innerHTML = character.species
    this.shadowRoot.querySelector("#character-status").innerHTML = character.status
  }



  render() {
    return html`
    
      <div class="card">
        <h1>
          count is ${this.count}
        </h1>
        <child-1-element @my-event-1="${this.myEvent1Handler}"></child-1-element>
      <character-getter-element @new-character-event="${this.newCharacterEventHandler}"></character-getter-element>
      <h1 id="character-name"></h1>
      <img id="character-img">  
      <h3 id="character-species"></h3>
      <h3 id="character-status"></h3>
    </div>
    `
  }


  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      h1 {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      h1:hover {
        border-color: #646cff;
      }
      h1:focus,
      h1:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        h1 {
          background-color: #f9f9f9;
        }
      }

      img{
        with: 50vw;
      }

      `
  }
}

window.customElements.define('my-element', MyElement)
