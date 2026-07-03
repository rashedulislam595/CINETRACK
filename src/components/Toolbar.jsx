export default function Toolbar({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, stats }) {
  return (
    <section className="toolbar" aria-label="Movie filters">
      <div>
        <h2>Movie Collection</h2>
        <p>{stats.total} total • {stats.watched} watched • {stats.unwatched} unwatched</p>
      </div>

      <div className="toolbar-controls">
        <input
          id="search"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by title..."
        />

        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          <option value="all">All</option>
          <option value="watched">Watched</option>
          <option value="unwatched">Unwatched</option>
        </select>
      </div>
    </section>
  );
}
