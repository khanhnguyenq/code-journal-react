import { readEntries } from './data';

export function ListOfEntries() {
  const data = readEntries();

  // deleting the bullet points
  const unstyled = {
    listStyle: 'none',
  };

  return (
    <ul style={unstyled} className="container">
      {data.map((i) => (
        <li key={i.entryId}>
          {
            <>
              <img src={i.photoUrl} alt={i.notes} />
              <h3>{i.title}</h3>
              <p>{i.notes}</p>
            </>
          }
        </li>
      ))}
    </ul>
  );
}
