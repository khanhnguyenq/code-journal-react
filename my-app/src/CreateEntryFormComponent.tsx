import placeholder from '/workspaces/code-journal-react/my-app/src/assets/placeholder-image-square.jpg'

export function CreateEntryForm() {

  return (
    <form id="entryForm">
      <div className="row margin-bottom-1">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            id="formImage"
            src={placeholder}
            alt="image of entry image" />
        </div>
        <div className="column-half">
          <label className="margin-bottom-1 d-block" htmlFor="formTitle">Title</label>
          <input
            required
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
            type="text"
            id="formTitle"
            name="formTitle" />
          <label className="margin-bottom-1 d-block" htmlFor="photoUrl"
          >Photo URL</label
          >
          <input
            required
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
            type="text"
            id="photoUrl"
            name="formURL" />
        </div>
      </div>
      <div className="row margin-bottom-1">
        <div className="column-full">
          <label className="margin-bottom-1 d-block" htmlFor="formNotes"
          >Notes</label
          >
          <textarea
            required
            className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
            name="formNotes"
            id="formNotes"
            cols={50}
          ></textarea>
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
            className="input-b-radius text-padding purple-background white-text">
            SAVE
          </button>
        </div>
      </div>
    </form>
  )
}
