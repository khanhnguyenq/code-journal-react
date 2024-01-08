import './layout.css';
import './index.css';
import './reset.css';
import './styles.css';
import './App.css';
import { NavBar } from './NavBarComponent';
import { EntriesComponent } from './EntriesComponent';
import { ListOfEntries } from './ListOfEntriesComponent';

function App() {
  return (
    <>
      <NavBar />
      <EntriesComponent />
      <ListOfEntries />
    </>
  );
}

export default App;
