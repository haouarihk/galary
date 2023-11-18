
import './App.css';
import CarouselCollection from './components/carousel/collection';
import { Item } from './components/carousel/types';
import Navbar from './components/navbar';

const testData: Item[] = [
  {
    id: "1",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  },
  {
    id: "2",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  },
  {
    id: "3",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  },
  {
    id: "3",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  }, {
    id: "3",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  }, {
    id: "3",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  }, {
    id: "3",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  }, {
    id: "3",
    collection: "testing",
    image: "https://manchesterartgallery.org/wp-content/uploads/2022/11/Rethinking-the-GrandTour-530x530.jpg",
    name: "Galary Image"
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="scrollable h-full">
        <CarouselCollection items={testData} />
      </div>
    </div>
  );
}

export default App;
