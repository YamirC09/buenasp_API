import React, { useEffect, useState } from 'react';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSeries();
  }, [currentPage]);

  const fetchSeries = async () => {
    const apiKey = 'a4d59c5704cd70b188a6dc485879f63a';
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${apiKey}&hash=e831972e0007719d4a7d0d8a4c71f556&limit=10&offset=${(currentPage - 1) * 10}`
    );
    const data = await response.json();
    setSeries(data.data.results);
  };


  return (
    <div>Series</div>
  )
}

export default Series