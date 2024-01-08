export function NewEntryBanner() {
  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>New Entry</h1>

        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul" id="entryUl"></ul>
        </div>
      </div>
    </div>
  )
}
