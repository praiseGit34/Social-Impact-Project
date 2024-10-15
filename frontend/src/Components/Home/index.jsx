import CustomNav from '../CustomNav';
import { Link } from 'react-router-dom';
import { userData } from '../../../helpers';
import './index.css';

const Home = () => {
  const { username } = userData();
  return (
    <div>
      <CustomNav />

      <div className=" text-center pt-4 home">
        <div>
          <div className="mainDiv">
            <img
              src="https://img.freepik.com/free-photo/schoolchildren-reading-library_1098-4048.jpg"
              alt="image info"
            />
            <h3 className="text-red-700">
              Get the best education services now
            </h3>
          </div>
          <Link to={'/teacher-dashboard/courses'}>See All Our Courses</Link>
        </div>
        <div className="whoWeAre">
          <div className="main">
            <h3>Who we are</h3>
            <div>
              <p>
                We offer a<br /> community <br /> based reliable and <br />{' '}
                efficient learning
                <br /> at your convinience
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <h3>Services</h3>
          <span>Check Us</span>
          <p>Online Teaching</p>
          <p>Reading Materials</p>
        </div>
        <div>
          <h3>Address</h3>
          <span>Contact Us</span>
          <p>Kampala</p>
          <p>+256787****</p>
        </div>
        <div>
          <h3>We are Social</h3>
          <span>Follow Us</span>
          <div className="text-center">
            <span>
              <box-icon type="logo" name="facebook-circle"></box-icon>
            </span>
            <span>
              <box-icon name="twitter" type="logo"></box-icon>
            </span>
            <span>
              <box-icon name="linkedin" type="logo"></box-icon>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
