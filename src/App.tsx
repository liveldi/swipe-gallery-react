import { SwipeGallery } from './components/SwipeGallery';
const images = [
  {url: '/images/01.jpg', description: 'Norway 01'},
  {url: '/images/02.jpg', description: 'Norway 02'},
  {url: '/images/03.jpg', description: 'Norway 03'},
  {url: '/images/04.jpg', description: 'Norway 04'},
  {url: '/images/05.jpg', description: 'Norway 05'},
  {url: '/images/06.jpg', description: 'Norway 06'},
  {url: '/images/07.jpg', description: 'Norway 07'},
  {url: '/images/08.jpg', description: 'Norway 08'},
  {url: '/images/09.jpg', description: 'Norway 09'},
  {url: '/images/10.jpg', description: 'Norway 10'},
  {url: '/images/11.jpg', description: 'Norway 11'},
  {url: '/images/12.jpg', description: 'Norway 12'},
  {url: '/images/13.jpg', description: 'Norway 13'},
];

function App() {
  return (
    <div className="container">
      <h1>Swipe Gallery ❤️</h1>
      <SwipeGallery images={images} />
    </div>
  )
}

export default App;
