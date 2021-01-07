// Import React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component.
const App = () => {
    const buttonText = 'Click Me!';
    return (
        <div>
            <label htmlFor='name' className='label'>
                Enter Name:
            </label>
            <input id='name' />
            <button
                style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    );
};

// Take component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
