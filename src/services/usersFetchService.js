import { useEffect, useState } from 'react';

import axios from 'axios';

const UsersFetchService = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log('Error!!', error);
      });
  }, []);

  return { users };
};

export default UsersFetchService;
