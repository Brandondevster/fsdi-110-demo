import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-banner">
        <div className="top-banner-text">
          <h1>freshfruit</h1>
          <h2>Fresh fruit, only the freshest.</h2>
        </div>
        <img src="/images/wrap2.jpg" alt="fresh fruit"></img>
      </div>

      <div className="jumbotron mb-0">
        <div className="jumbo-message pr-5 pt-5">
          <h1 className="display-4">Always fruit always fresh</h1>
          <p className="lead">Check our exclusive catalog of fresh fruit</p>
          <hr className="my-4" />
          <Link className="btn btn-info btn-lg"  to="/catalog">
            View our fresh fruit 🍊 <i class="" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="main-image">
          <img src=""></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
