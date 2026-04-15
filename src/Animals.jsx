import "./Animals.css";

function AnimalList({ animals }) {
  return (
    <div className="animals">
        Animal Noises
        <ul>
        {animals.map((animal, index) => (
            <li key={index}>{animal}</li>
        ))}
        </ul>
    </div>
  );
}

export default AnimalList;