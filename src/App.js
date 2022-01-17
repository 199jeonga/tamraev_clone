import './App.css';
import Header from './component/Header';
// import RouterPage from './router/RouterPage';
import Footer from './component/Footer';


function App() {
  const siteName="탐라는 전기차"
  return (
    <div className="App">
      <Header heading={siteName} />
      {/* <RouterPage /> */}
      <Footer heading={siteName} />
    </div>
  );
}

export default App;
