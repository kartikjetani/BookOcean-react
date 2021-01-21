import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CommonListing from './component/CommonListing';
import Explore from './component/Explore';
import Footer from './component/Footer';
import Header from './component/Header';
import PopularListing from './component/PopularListing';
import ViewBook from './component/ViewBook';
import  store  from './store';
import ReactGa from 'react-ga';
import Categories from './component/Categories';

function App() {

  useEffect(() => {
   
    ReactGa.initialize("UA-187661708-1")
   ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])


  return (
    <>
    <Provider store={store}>

  <Header  />
 
  <Explore />

  <Route exact path="/" component={PopularListing}/>

  <Route path="/categories" component={Categories} >

  </Route>
  
  <Route path="/search" component={CommonListing}/>
  <Route path="/view/:md5" component={ViewBook}/>


  <Footer/>
  </Provider>
  </>
  );
}

export default App;
