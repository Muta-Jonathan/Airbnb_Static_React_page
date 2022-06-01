import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Card from "./components/Card"
import Server from "./components/Server"

function App() {
  const dataDisplay = Server.map(item =>
    <Card key={item.id}
      item={item} />)

  return (
    <div className="container">
      <NavBar />
      <Main />
      <div className="card-section" >
        {dataDisplay}
      </div>
    </div>
  );
}

export default App;