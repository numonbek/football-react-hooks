import React from 'react';
import { API_URL, HEADER } from '../../config';
import classnames from 'classnames';
import st from './CalendarCommand.module.scss';
import '../CalendarLigue/total.scss';
import MatchLists from '../CalendarLigue/MatchLists';
// import Logo from '../../assets/preloaders/loader04.gif';

const CalendarCommand = () => {
  const [loading, setLoading] = React.useState(false);
  const [legueList, setLegueList] = React.useState([]);
  const [selectLeague, setSelectLeague] = React.useState(null);
  const [fromTo, setFromTo] = React.useState({ from: 0, to: 0 });
  const [dataFilter, setDataFilter] = React.useState([]);
  const [badRequest, setBadRequest] = React.useState(false);
  const [accessDenied, setAccessDenied] = React.useState(false);
  const [cantFind, setCantFind] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [s, setS] = React.useState('');

  React.useEffect(() => {
    fetch(`${API_URL}` + 'teams', HEADER)
      .then((res) => res.json())
      .then((data) => (console.log('utc', data), setLegueList(data.teams), setLoading(true)));
  }, []);

  function fetchHandle(e) {
    // e.preventDefault();
    // http://api.football-data.org/v2/teams/1/matches?dateFrom=2020-08-10&dateTo=2021-08-10

    fetch(`http://api.football-data.org/v2/teams/${e.target.value}/matches`, HEADER)
      .then(
        (res) => (
          console.log(res), res.status >= 200 && res.status < 400 ? res.json() : Promise.reject(res)
        ),
      )
      .then((data) => {
        // console.log('utcDate', data.errorCode == 403, data['errorCode'] == 400, data);
        console.log('data.matches', data.matches);
        setDataFilter(data.matches);

        setLoading(true);
      })
      .catch((err) => console.log('matches not found this period in this legue', err.status));
  }

  function search(inpName) {
    if (q == '') return inpName;
    console.log(s == '', q == '');
    if (q == '' && s == '') {
      return inpName;
    } else if (q == '') {
      return inpName.filter(
        (inp) =>
          parseInt(inp.utcDate.slice(0, 10).split('-').join('')) < parseInt(s.split('-').join('')),
      );
    } else if (s == '') {
      return inpName.filter(
        (inp) =>
          parseInt(inp.utcDate.slice(0, 10).split('-').join('')) > parseInt(q.split('-').join('')),
      );
    } else if (q !== '' && s !== '') {
      return inpName.filter(
        (inp) =>
          parseInt(inp.utcDate.slice(0, 10).split('-').join('')) >
            parseInt(q.split('-').join('')) &&
          parseInt(inp.utcDate.slice(0, 10).split('-').join('')) < parseInt(s.split('-').join('')),
      );
    }
  }

  return (
    <div>
      <div className={st.title}>{'List of league competition commands'.toUpperCase()}</div>
      <div className={classnames(st.input)}>
        <select
          name="cars"
          id="cars"
          className={classnames(st.select)}
          onChange={(e) => fetchHandle(e)}
          defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>
            Select Leagues...
          </option>
          {legueList.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <form className={st.form} onSubmit={(e) => fetchHandle(e)}>
          <input
            className={st.input_inp}
            type="date"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <input
            className={st.input_inp}
            type="date"
            value={s}
            onChange={(e) => setS(e.target.value)}
          />
          <button className={st.button} type="submit">
            Search
          </button>
        </form>
      </div>

      <ul className="list-scores">
        {console.log('dataFilter', dataFilter)}
        <MatchLists data={search(dataFilter)} loading={loading} />
      </ul>
    </div>
  );
};

export { CalendarCommand };
