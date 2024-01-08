import './layout.css';
import './index.css';
import './reset.css';
import './styles.css';
import './App.css';
import { NavBar } from './NavBarComponent';
import { EntriesComponent } from './EntriesComponent';
import { ListOfEntries } from './ListOfEntriesComponent';
import { NavBarPlain } from './NavBarPlain';
import { NewEntryBanner } from './NewEntryBanner';
import { CreateEntryForm } from './CreateEntryFormComponent';

function App() {
  return (
    <>
      <NavBarPlain />
      <NewEntryBanner />
      <CreateEntryForm />
      {/* <NavBar />
      <EntriesComponent />
      <ListOfEntries /> */}
    </>
  );
}

export default App;
