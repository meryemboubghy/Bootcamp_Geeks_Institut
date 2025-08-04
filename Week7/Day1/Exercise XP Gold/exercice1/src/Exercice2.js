const PlanitList = () => {
  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  return (
    <div className="container mt-5">
      <h2>Liste des planètes</h2>
      <ul className="list-group">
        {planets.map((planet, index) => (
          <li key={index} className="list-group-item">
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanitList;
