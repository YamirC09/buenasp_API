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
      `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${apiKey}&hash=e831972e0007719d4a7d0d8a4c71f556&limit=10&offset=${(currentPage + 1)}`
    );
    const data = await response.json();
    setSeries(data.data.results);
    console.log(data)
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };



  return (
    <div>
      <h1>Series de Marvel</h1>
      <div>
        <button onClick={handlePreviousPage}>Anterior</button>
        <button onClick={handleNextPage}>Siguiente</button> 
      </div>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <h3>{serie.title}</h3>
            <img
              src={`${serie.thumbnail.path}/standard_fantastic.${serie.thumbnail.extension}`}
              alt={serie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Series