
import {Pages} from "./pages";
import css from "./style/App.module.css"
import {Header, Search} from "./components";

function App() {
  return (

    <div className={css.wrap_container}>
        <Header/>
        <Search/>
        <Pages/>
    </div>
  );
}

export default App;
