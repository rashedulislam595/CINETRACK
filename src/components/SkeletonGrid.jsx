export default function SkeletonGrid() {
  return (
    <section className="movie-grid" aria-label="Loading movies">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton poster"></div>
          <div className="skeleton line wide"></div>
          <div className="skeleton line"></div>
          <div className="skeleton line short"></div>
        </div>
      ))}
    </section>
  );
}
