// import logo from './logo.svg';
// import './App.css';
// import Map from './components/Map';

// //Bootstrap css import
 import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// function App() {
//   return (
//     <div className="App1">
//        <Map/>
//     </div>
//   );
// }
// export default App;
// import { Products } from './components/products';
// import contents from './content';
//  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//  import "@fortawesome/fontawesome-free/css/all.min.css";

// export default function App() {
//     return(
//            <div className='App'>
//                {contents.map(contents => (
//                    <Products 
//                        key={contents.id}
//                        image={contents.image}
//                        name={contents.name}
//                        price={contents.price}
//                        totalSales={contents.totalSales}
//                        timeLeft={contents.timeLeft}
//                        rating={contents.rating}
//                    />
//                ))}
               
//            </div>
//     )
// }


import React from 'react'
// import Card1 from './components/Card1'
// import ClassBasedCompon from './components/ClassBasedCompon'
import Bootstrap from './components/Bootstrap';
// import Navbar from './components/Navbar'
// import Loginform from './components/Loginform'
// import Login from './components/Login'
// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
        {/* <ClassBasedCompon/> */}
            {/* <Card1/> */}
            <Bootstrap/>
    </div>
  )
}

export default App


