import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  BackgroundVideo,
  CalendarCommand,
  CalendarLigue,
  Commands,
  Home,
  Leagues,
} from './components';
import { Layout } from './layout/Layout';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Routes>
        <Route path="/football-react-hooks" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/football-react-hooks/league" element={<Leagues />} />
          <Route path="/football-react-hooks/commands" element={<Commands />} />
          <Route
            path="/football-react-hooks/football-react-hooks/calendarligue"
            element={<CalendarLigue />}
          />
          <Route path="/football-react-hooks/calendarcommand" element={<CalendarCommand />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
