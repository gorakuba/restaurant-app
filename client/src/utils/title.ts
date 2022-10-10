import { useState } from 'react';

const Title = () => {
  const [title, setTitle] = useState('');
  return { title, setTitle };
};

export default Title;
