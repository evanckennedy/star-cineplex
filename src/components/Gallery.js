function Gallery(props) {
  return (
    <section className="gallery-section">
      <div className="section-heading">
        <p className="section-intro">Features</p>
        <p className="section-name">Now Playing</p>
      </div>
      <div className="gallery grid gap-2">
        { props.playingList.map( movie => 
        <div key={movie.id} className="poster-wrapper">
          <figure>
            <img src={movie.poster} alt={movie.title} />
            <div className="content">
              <p className="movie-title">{movie.title}</p>
              <p className="release-duration">
                <span>{movie.year}</span>
                  |
                <span>{movie.runningTime}</span>
              </p>
              <div className="genres flex">
                {movie.genre.map((genre, index) => 
                  <span key={index}>{genre}</span>
                )}
              </div>
            </div>
          </figure>
        </div>
        )}
      </div>
    </section>   
  )
}

export default Gallery;