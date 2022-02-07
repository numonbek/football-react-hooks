import React from 'react';
import Preloader from '../../assets/preloaders/loader04.gif';
import ManUnit from '../../assets/png/man_unit.png';

const MatchLists = (props) => {
  const { data, loading } = props;
  console.log('filter date', data);
  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <img className="preloader" src={Preloader} />
        </div>
      ) : (
        data.map((list, index) => (
          <li key={index}>
            <div className="scores">
              <div className="team">
                {/* away Team */}
                <div className="team-name">{list.awayTeam.name}</div>
                <div className="team-photo">
                  <img src={ManUnit} className="team-logo" />
                </div>
              </div>
              <div className="scores-block">
                <div className="scores-total">
                  <div className="scores-count scores-h1">{list.score.fullTime.awayTeam}</div>
                  <div className="scores-first scores-h1">:</div>
                  <div className="scores-count scores-count--start scores-h1">
                    {list.score.fullTime.homeTeam}
                  </div>
                </div>
                <div className="scores-status">{list.status}</div>
              </div>
              {/* home Team */}
              <div className="team team-second">
                <div className="team-photo">
                  <img src={ManUnit} className="team-logo" />
                </div>
                <div className="team-name">{list.homeTeam.name}</div>
              </div>
            </div>
          </li>
        ))
      )}
    </React.Fragment>
  );
};

export default MatchLists;
