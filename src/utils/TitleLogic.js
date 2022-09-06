import { useState } from 'react';

const TitleLogic = () => {
  const [title, setTitle] = useState('');
  return { title, setTitle };
};

export default TitleLogic;
