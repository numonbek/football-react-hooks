import React from 'react';
import Preloader from '../../assets/preloaders/loader04.gif';
import CardPhoto from '../../assets/png/logo_01.png';

const LeaguesList = (props) => {
  const { data, loading } = props;
  return (
    <React.Fragment>
      {!loading ? (
        <div>
          <img className="preloader" src={Preloader} />
        </div>
      ) : (
        data.map((list, index) => (
          <li key={index}>
            <div className="card">
              <div className="card-photo">
                <img width={68} height={68} src={CardPhoto} />
              </div>
              <div className="card-title">{list.name}</div>
            </div>
          </li>
        ))
      )}
    </React.Fragment>
  );
};

export { LeaguesList };
