import { useMemo, useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieCard from './components/MovieCard';
import Toolbar from './components/Toolbar';
import SkeletonGrid from './components/SkeletonGrid';
import EmptyState from './components/EmptyState';
import { initialMovies } from './data/initialMovies';
import { useLocalStorage } from './hooks/useLocalStorage';

const STORAGE_KEY = 'cinetrack_movies_v1';

export default function App() {
  const [movies, setMovies, isLoading] = useLocalStorage(STORAGE_KEY, initialMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  function handleAddMovie(movieData) {
    const newMovie = {
      id: crypto.randomUUID(),
      ...movieData,
      watched: false,
      createdAt: new Date().toISOString(),
    };
    setMovies((prev) => [newMovie, ...prev]);
  }

  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  }

  function handleDeleteMovie(id) {
    const confirmed = window.confirm('Delete this movie from your watchlist?');
    if (!confirmed) return;
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  }

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'watched' && movie.watched) ||
        (statusFilter === 'unwatched' && !movie.watched);
      return matchesSearch && matchesStatus;
    });
  }, [movies, searchTerm, statusFilter]);

  const stats = useMemo(() => {
    const watched = movies.filter((movie) => movie.watched).length;
    return {
      total: movies.length,
      watched,
      unwatched: movies.length - watched,
    };
  }, [movies]);

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">CineTrack</p>
          <h1>Movie Watchlist & Review Dashboard</h1>
          <p>Track movies, filter watched status, search titles, and keep everything saved in your browser.</p>
        </div>
      </header>

      <MovieForm onAddMovie={handleAddMovie} />

      <section className="panel">
        <Toolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          stats={stats}
        />

        {isLoading ? (
          <SkeletonGrid />
        ) : filteredMovies.length > 0 ? (
          <section className="movie-grid" aria-label="Movie list">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleWatched={handleToggleWatched}
                onDeleteMovie={handleDeleteMovie}
              />
            ))}
          </section>
        ) : (
          <EmptyState />
        )}
      </section>
    </main>
  );
}
