import React from 'react';
import { Search } from '../../assets/svg/icons';
import { API_URL, HEADER } from '../../config';
import sl from './Commands.module.scss';
import CommandsList from './CommandsList';

const Commands = () => {
  const [loading, setLoading] = React.useState(false);
  const [commandsList, setCommandsList] = React.useState([]);
  const [q, setQ] = React.useState('');
  React.useEffect(() => {
    fetch(API_URL + 'teams', HEADER)
      .then((res) => res.json())
      .then((data) => (setCommandsList(data.teams), setLoading(true)));
  }, []);

  function search(inpName) {
    return inpName.filter((inp) => inp.name.toLowerCase().indexOf(q) > -1);
  }
  return (
    <div>
      <div className={sl.title}>{'List of league competition commands'.toUpperCase()}</div>
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
        <CommandsList data={search(commandsList)} loading={loading} />
      </ul>
    </div>
  );
};

export { Commands };
