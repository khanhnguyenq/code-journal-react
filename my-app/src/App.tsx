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
import { EditingBanner } from './EditingBanner';

function App() {
  const [clicked, setClicked] = useState('entries');

  return clicked === 'entries' ? (
    <>
      <NavBarPlain />
      <EntriesComponent onClick={() => setClicked('adding')} />
      <ListOfEntries onEdit={() => setClicked('editing')} />
    </>
  ) : clicked === 'adding' ? (
    <>
      <NavBar onClick={() => setClicked('adding')} />
      <NewEntryBanner />
      <CreateEntryForm setClicked={setClicked} />
    </>
  ) : clicked === 'editing' ? (
    <>
      <NavBarPlain />
      <EditingBanner />
      <CreateEntryForm setClicked={setClicked} />
    </>
  ) : (
    <></>
  );
}

export default App;
