import React, { useEffect, useState } from 'react';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSeries();
  }, [currentPage]);
  
  return (
    <div>Series</div>
  )
}

export default Series