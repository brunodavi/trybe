export default function List({ list }) {
  return (
    <ul>
      {list.map((value, i) => (
        <li key={ i }>{value}</li>
      ))}
    </ul>
  );
}
