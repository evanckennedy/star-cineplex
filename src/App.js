import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const movies = [
    {
      id: 1022,
      title: 'Spider-Man: No Way Home',
      year: 2021,
      runningTime: '2h 30m',
      description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
      genre: ['Action', 'Adventure', 'Fantasy'],
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/spider-man-no-way-home.jpg'
    },
    {
      id: 1023,
      title: 'West Side Story',
      year: 2021,
      runningTime: '2h 36m',
      description: 'An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.',
      genre: ['Musical', 'Drama'],
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/west-side-story.jpg',
    },
    {
      id: 1024,
      title: 'Avengers: Infinity War',
      year: 2018,
      runningTime: '2h 29m',
      description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      genre: ['Action', 'Adventure', 'Fantasy'],
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
    },
    {
      id: 1025,
      title: 'The Batman',
      year: 2022,
      runningTime: '2h 59m',
      description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
      genre: ['Action', 'Crime', 'Drama'],
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-batman.jpg',
    }
  ];

  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="container">
          <Gallery playingList={movies} />
        </div>    
      </main>
    </>
  );
}

export default App;
