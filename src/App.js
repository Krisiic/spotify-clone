import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Foryou from './Foryou';
import Popular from './Popular';

function App() {
  return (
    <div className="App">

      {/* Recently added section */}
      <Header />

      {/* Made for you */}
      <Foryou />

      {/* Navbar */}
      <Navigation />

      {/* Popular on spotify */}
      <Popular />
    </div>
  );
}

export default App;
