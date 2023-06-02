import React, { useEffect, useState } from 'react';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      fetchSeries();
    }
  }, [isLoading]);

  const fetchSeries = async () => {
    const apiKey = 'a4d59c5704cd70b188a6dc485879f63a';
    const offset = currentPage * 10; // Multiplica por el límite para obtener el offset correcto
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/series?ts=1&apikey=${apiKey}&hash=e831972e0007719d4a7d0d8a4c71f556&limit=10&offset=${offset}`
    );
    const data = await response.json();
    setSeries(data.data.results);
    setIsLoading(false);
  };

  const handleLoadSeries = () => {
    setCurrentPage(0); // Reinicia la página al cargar nuevas series
    setIsLoading(true);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsLoading(true);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  return (
    <div>
      <h1>Series de Marvel</h1>
      <h2>PD: Algunas series no poseen imágenes</h2>
      <div>
        <button onClick={handleLoadSeries}>Cargar Series</button>
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

export default Series;
