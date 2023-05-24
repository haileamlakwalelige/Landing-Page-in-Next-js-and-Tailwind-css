import Hero from './Hero';
import Navbar from './Navbar';

const Home=()=>{
  return(
    <div className="bg-[url('/images/image.png')] h-[100vh] pb-20 md:pb-0 md:overflow-y-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}


export default Home;
