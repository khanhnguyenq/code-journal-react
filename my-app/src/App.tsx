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
import { Entry } from './data';

function App() {
  const [clicked, setClicked] = useState('entries');
  const [entry, setEntry] = useState<Entry>();

  return clicked === 'entries' ? (
    <>
      <NavBarPlain />
      <EntriesComponent onClick={() => setClicked('adding')} />
      <ListOfEntries
        onEdit={(e) => {
          setClicked('editing');
          setEntry(e);
        }}
      />
    </>
  ) : clicked === 'adding' ? (
    <>
      <NavBar onClick={() => setClicked('adding')} />
      <NewEntryBanner />
      <CreateEntryForm setClicked={setClicked} />
    </>
  ) : (
    <>
      <NavBarPlain />
      <EditingBanner />
      <CreateEntryForm setClicked={setClicked} entry={entry} />
    </>
  );
}

export default App;
