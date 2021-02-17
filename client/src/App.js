import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import CommonListing from './component/CommonListing';
import Explore from './component/Explore';
import Footer from './component/Footer';
import Header from './component/Header';
import PopularListing from './component/PopularListing';
import ViewBook from './component/ViewBook';
import  store  from './store';
import ReactGa from 'react-ga';
import Categories from './component/Categories';
import UploadBook from './component/All_iframe';
import Engineering from './component/Engineering';
import GTU from './component/GTU';

function App() {

  useEffect(() => {
   
    ReactGa.initialize("UA-187661708-1")
   ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])


  return (
    <>
    <Provider store={store}>

  <Header  />
 
  

  <Route exact path="/" >
  <Explore />
  <PopularListing/>
    </Route>
  <Route path="/upload" component={UploadBook}/>
  <Route path="/request" component={UploadBook}/>
  <Route path="/download2/:md5" component={UploadBook}/>
  <Route path="/preview/:md5" component={UploadBook}/>
  
  <Route path="/categories" component={Categories} />
  
  <Route path="/search" component={CommonListing}/>
  <Route path="/view/:md5" component={ViewBook}/>
  <Route path="/engineering" component={Engineering}/>
  <Route path="/gtu/:subcode" component={GTU}/>


  <Footer/>
  </Provider>
  </>
  );
}

export default App;
