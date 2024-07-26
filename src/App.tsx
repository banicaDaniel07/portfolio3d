import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css';
import { useEffect } from "react";
import { APP_DATE_FORMAT, LAST_VISIT_TIME, NUMBER_OF_VISITS_TODAY, USER_ID } from "./utils/constants";
import moment from "moment";
import writeUserData from "./utils/firebase";
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  useEffect(() => {
    // If user doesn't have and id generat and set one
    if (_.isNil(localStorage.getItem(USER_ID))) {
      localStorage.setItem(USER_ID, uuidv4())
    }

    // If user never visited the website before
    if (_.isNil(localStorage.getItem(LAST_VISIT_TIME))) {
      // Set the time as last login time 
      localStorage.setItem(LAST_VISIT_TIME, moment.now() + '');
      // Set the numeber of logins today as 1
      localStorage.setItem(NUMBER_OF_VISITS_TODAY, '1');
      writeUserData();
    } else {
      // If user visited the website before
      const lastLoginTime = moment(Number(localStorage.getItem(LAST_VISIT_TIME)));
      const numberOfVisitsToday = Number(localStorage.getItem(NUMBER_OF_VISITS_TODAY)) || 1;
      // If 10 minutes passed since last visit
      if (lastLoginTime.add(10, 'minutes').isBefore(moment.now())) {
        // Check if the lastTime day is different than now
        if (lastLoginTime.format(APP_DATE_FORMAT) !== moment().format(APP_DATE_FORMAT)) {
          // Set the number of visits as 1
          localStorage.setItem(NUMBER_OF_VISITS_TODAY, '1');
        } else {
          // If is the same day, increase the number of visits
          localStorage.setItem(NUMBER_OF_VISITS_TODAY, numberOfVisitsToday + 1 + '');
        }
        localStorage.setItem(LAST_VISIT_TIME, moment.now() + '');
        writeUserData();
      }
    }
  }, []);

  return (
    <main className='bg-slate-300/20 h-screen overflow-y-scroll overflow-x-hidden'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
