import { useState } from 'react';
import { validateMovie } from '../utils/validators';

const emptyForm = {
  title: '',
  genre: '',
  releaseYear: '',
  posterUrl: '',
};

export default function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateMovie(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    onAddMovie({
      ...formData,
      releaseYear: Number(formData.releaseYear),
    });

    setFormData(emptyForm);
    setErrors({});
  }

  return (
    <section className="panel form-panel" aria-labelledby="add-movie-title">
      <h2 id="add-movie-title">Add New Movie</h2>
      <form className="movie-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Example: Dune" />
          {errors.title && <small className="error">{errors.title}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input id="genre" name="genre" value={formData.genre} onChange={handleChange} placeholder="Example: Sci-Fi" />
          {errors.genre && <small className="error">{errors.genre}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="releaseYear">Release Year</label>
          <input id="releaseYear" name="releaseYear" type="number" value={formData.releaseYear} onChange={handleChange} placeholder="2024" />
          {errors.releaseYear && <small className="error">{errors.releaseYear}</small>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="posterUrl">Poster URL</label>
          <input id="posterUrl" name="posterUrl" value={formData.posterUrl} onChange={handleChange} placeholder="https://example.com/poster.jpg" />
          {errors.posterUrl && <small className="error">{errors.posterUrl}</small>}
        </div>

        <button className="primary-btn" type="submit">Add Movie</button>
      </form>
    </section>
  );
}
