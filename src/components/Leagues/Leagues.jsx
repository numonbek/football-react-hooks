import React from 'react';
import { Search } from '../../assets/svg/icons';
import { API_URL, HEADER } from '../../config';
import { LeaguesList } from './LeaguesList';
import classnames from 'classnames';
import sl from './Leagues.module.scss';

const Leagues = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [legueList, setLegueList] = React.useState([]);

  const [q, setQ] = React.useState('');
  React.useEffect(() => {
    fetch(API_URL + 'competitions', HEADER)
      .then((res) => res.json())
      .then((data) => (setLegueList(data.competitions), setLoading(true)))
      .catch(() => setError(true));
  }, []);

  function search(inpName) {
    return inpName.filter((inp) => inp.name.toLowerCase().indexOf(q) > -1);
  }

  return (
    <div>
      <div className={sl.title}>{'List of league competition matches'.toUpperCase()}</div>
      <div className={sl.input}>
        <label className={sl.input_block}>
          <span className={sl.input_svg}>
            <Search width="100%" />
          </span>
          <input
            className={sl.input_inp}
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search..."
          />
        </label>
      </div>

      <ul className="list">
        <LeaguesList data={search(legueList)} loading={loading} />
      </ul>
    </div>
  );
};

export { Leagues };
