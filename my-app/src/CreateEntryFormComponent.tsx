import { useState } from 'react';
import placeholder from '/workspaces/code-journal-react/my-app/src/assets/placeholder-image-square.jpg';
import { UnsavedEntry, addEntry } from './data';
import { FormEvent } from 'react';
type CreateEntryFormProps = {
  clicked: boolean;
  setClicked: (status: boolean) => void;
};
export function CreateEntryForm({ clicked, setClicked }: CreateEntryFormProps) {
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data: UnsavedEntry = {
      title: title,
      notes: notes,
      photoUrl: photoUrl,
    };
    addEntry(data);
    setClicked(!clicked);
  }

  return (
    <form id="entryForm" onSubmit={handleSubmit}>
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={photoUrl ? photoUrl : placeholder}
            alt="image of entry image"
          />
        </div>
        <div className="column-half">
          <label className="margin-bottom-1 d-block" htmlFor="formTitle">
            Title
          </label>
          <input
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
            type="text"
            id="formTitle"
            name="formTitle"
          />
          <label className="margin-bottom-1 d-block" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            required
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
            type="text"
            id="photoUrl"
            name="formURL"
          />
        </div>
      </div>
      <div className="row margin-bottom-1">
        <div className="column-full">
          <label className="margin-bottom-1 d-block" htmlFor="formNotes">
            Notes
          </label>
          <textarea
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
            name="formNotes"
            id="formNotes"
            cols={50}></textarea>
        </div>
      </div>
      <div className="row">
        <div className="column-full d-flex justify-between">
          <button
            className="invisible delete-entry-button"
            type="button"
            id="deleteEntry">
            Delete Entry
          </button>
          <button
            type="submit"
            className="input-b-radius text-padding purple-background white-text">
            SAVE
          </button>
        </div>
      </div>
    </form>
  );
}
