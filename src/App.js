// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { createRoot } from 'react-dom/client';
 
const heading = React.createElement('h1', null, 'Biodata Perusahaan');
 
const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');
 
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
 
const container = React.createElement('div', null, [heading, unorderedList]);
 
const root = createRoot(document.getElementById('root'));
root.render(container);