import envConfig from './config'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>title: {envConfig.title}</p>
        <p>backend_url: {envConfig.backend_url}</p>        
        <p>version: {envConfig.version}</p>
      </header>
    </div>
  );
}

export default App;
