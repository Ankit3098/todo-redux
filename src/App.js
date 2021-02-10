import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { selectEditMode } from "./store/todoes/reducer";
import EditInput from "./components/EditInput";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const editMode = useSelector(selectEditMode);

  return (
    <div className="container app">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          {editMode ? <EditInput /> : <TodoInput />}
          <TodoList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
