// import "./App.css";
import ItemListContainer from "./componentes/itemListConteiner/ItemListContainer";
import NavBar from "./componentes/navBar/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <ItemListContainer mensaje="MiRA UNA VACA POLACA"></ItemListContainer>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
