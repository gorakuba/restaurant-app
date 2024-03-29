// import { useLocalStorage } from '../utils/useLocalStorage';
import useLocalStorage from 'use-local-storage';
import { Mode } from '../enums/Mode';

const ModeHandler = () => {
  const { LIGHT_MODE, DARK_MODE } = Mode;
  const [mode, setMode] = useLocalStorage('mode', LIGHT_MODE);

  const switchMode = () => {
    switch (mode) {
      case LIGHT_MODE:
        mode === LIGHT_MODE && setMode(DARK_MODE);
        break;
      case DARK_MODE:
        mode === DARK_MODE && setMode(LIGHT_MODE);
        break;
    }
  };

  return { mode, switchMode };
};

export default ModeHandler;
