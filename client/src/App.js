import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import CommonListing from './component/CommonListing';
import Explore from './component/Explore';
import Footer from './component/Footer';
import Header from './component/Header';
import PopularListing from './component/PopularListing';
import ViewBook from './component/ViewBook';
import  store  from './store';

function App() {

  return (
    <>
    <Provider store={store}>
  <Header  />
  <Explore />
  <Route exact path="/" component={PopularListing}/>
  <Route path="/search" component={CommonListing}/>
  <Route path="/view/:md5" component={ViewBook}/>
  <Footer/>
  </Provider>
  </>
  );
}

export default App;
