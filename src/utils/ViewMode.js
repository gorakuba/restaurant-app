import { useEffect, useState } from 'react';

import axios from 'axios';

const ViewMode = () => {
  const [mode, setMode] = useState(false);
  const [darkModeState, setDarkModeState] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/view/1')
      .then((response) => {
        setDarkModeState(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, [mode]);

  const modeHandler = () => {
    if (mode === false) {
      setMode(true);
      axios.patch('http://localhost:3001/view/1', { setDarkMode: true });
    } else {
      setMode(false);
      axios.patch('http://localhost:3001/view/1', { setDarkMode: false });
    }
  };

  return { modeHandler, darkModeState };
};

export default ViewMode;
