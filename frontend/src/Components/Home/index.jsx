import NavBar from './NavBar';
import BannerImage from '../../assets/home-banner-image.png';
import { FaPhoneVolume } from 'react-icons/fa6';
import About from '../About';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <dir>
        <NavBar />
      </dir>
      <div>
        <div className="background"></div>
        <div>
          <img
            src={BannerImage}
            alt=""
            className="absolute rounded top-24 right-20 h-auto banner"
          />
        </div>
        <div className="col absolute max-w-96 top-40 left-32 ">
          <h1 className="text-5xl font-bold leading-tight text-left mb-5">
            Investing in Knowledge and
            <span className="text-purple-800">&nbsp;Your Future</span>
          </h1>
          <p className="text-xl">
            Our Eduline Online E-Learning Platform has been developed to be a
            viehicle for delivering holiday learning solutions for learners
          </p>
          <button className="flex gap-2 items-center bg-teal-900 py-1 px-3 text-neutral-50 font-bold ml-20 mt-10 h-10 w-60 pl-12 text-xl">
            <FaPhoneVolume fontSize={24} /> Contact Us
          </button>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
