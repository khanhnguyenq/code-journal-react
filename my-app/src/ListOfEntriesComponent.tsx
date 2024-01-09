import { readEntries } from './data';

type ListOfEntriesProps = {
  onClick: () => void;
};

export function ListOfEntries({ onClick }: ListOfEntriesProps) {
  const data = readEntries();

  // deleting the bullet points
  const unstyled = {
    listStyle: 'none',
  };

  return (
    <ul style={unstyled} className="container">
      {data.map((i) => (
        <li key={i.entryId} className={`${i.entryId}`}>
          {
            <>
              <img src={i.photoUrl} alt={i.notes} />
              <h3>{i.title}</h3>
              <p>{i.notes}</p>
              <a onClick={onClick}>Edit</a>
            </>
          }
        </li>
      ))}
    </ul>
  );
}
