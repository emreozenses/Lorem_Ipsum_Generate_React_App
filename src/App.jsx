import { useState } from 'react';
import {text} from './data';


const App = () => {
const [count,setCount] = useState(1);

  return (
    <div>
      <form className="form">
        <h4>tired of boring lorem ipsum?</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            paragraphs:
          </label>
          <input
            type="number"
            className="form-input"
            name="name"
            id="name"
            value={count}
          />
          <button type="submit" className="btn btn-block">
            generate
          </button>
        </div>
      </form>
    </div>
  )};
export default App;
