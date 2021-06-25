import { Button } from "./components/Button/Button";
import { Note } from "./components/Note/Note";
import { Form } from "./components/Form/Form";
import "./App.css";
import { NoteProvider } from "./contextApi/notes";

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <h1>Simple Notes App</h1>
        <i className="fa fa-sticky-note"></i>
        <Form>
          <Button />
        </Form>
        <Note />
      </div>
    </NoteProvider>
  );
}

export default App;
