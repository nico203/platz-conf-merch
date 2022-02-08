import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGoogleAddress(addres) {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const url = ``;

    const fetch = async () => {
      const response = await axios(url);
      setLocation(response.data.results[0].geometry.location);
    };
    fetch();
  }, [addres]);

  return location;
}
