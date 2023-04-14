//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './component/routing';

import Navbar from './component/frontend/navbar'
import Footer from './component/frontend/footer'
import Header from './component/frontend/header';
//import Frontend from './component/frontend/frontend';


 
function App() {
  return ( 
    <div className="App">
       {/* header section */}
       <div className='container pb-4 border-bottom'>
        <div className='row'>
          <Header/>
          <Navbar />
        </div>
      </div>
       <Routing/>
        {/* footer section */}
      <div className='container border-bottom mt-4'>
        <Footer />
      </div>
       </div>
  );
}

export default App;
