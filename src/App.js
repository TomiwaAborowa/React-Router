import React, { useEffect } from 'react';
import './style.css';
import {
  Route,
  Routes,
  NavLink,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// Homepage
function Home() {
  //using useSearchParams hook to get search params
  const [searchParams, setSearchParams] = useSearchParams();
  //get and set the searchParams

  useEffect(() => {
    //set the search  params
    setSearchParams({
      id: '123456',
    });

    //get the search params
  }, [searchParams, setSearchParams]);

  console.log(searchParams.get('id'));

  return (
    <section className="text">
      <h2>Home</h2>
      <p className="">This is my homepage</p>
      <p className="">Click the link below to access the aboutme page </p>
      <Navigation />
    </section>
  );
}

//AboutME Page
function Aboutme() {
  //using useLocation to get url
  const location = useLocation();
  console.log(location);

  //using useNavigate to change url directory
  const navigate = useNavigate();
  //handle navigate to home page
  const handleNavigate = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <section className="text1">
      <h2>About Me</h2>
      <p className="">This is the aboutme page</p>
      <p>Basic page test showing how react router works.</p>
      <Navigation />
      <div>
        <button onClick={handleNavigate} className="butt">
          Go to Home page
        </button>
      </div>
    </section>
  );
}

//Navigation using NavLink and showing current status
function Navigation() {
  return (
    <section>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'black' }
        }
        to="/"
        className="nav"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'black' }
        }
        to="/about"
        className="nav"
      >
        About Me
      </NavLink>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutme />} />
    </Routes>
  );
}
