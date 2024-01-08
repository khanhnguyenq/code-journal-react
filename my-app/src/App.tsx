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
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(true);

  return clicked ? (
    <>
      <NavBar onClick={() => setClicked(!clicked)} />
      <NewEntryBanner />
      <CreateEntryForm clicked={clicked} setClicked={setClicked} />
    </>
  ) : (
    <>
      <NavBarPlain />
      <EntriesComponent onClick={() => setClicked(!clicked)} />
      <ListOfEntries />
    </>
  );
}

export default App;
