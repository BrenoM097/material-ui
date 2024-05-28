import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/login";
import AnchorTemporaryDrawer from "./pages/mui-drawer/menu-test";
import DataGridDemo from "./pages/data_grid/DataGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <DataGridDemo/>
    </div>
  );
}

export default App;
