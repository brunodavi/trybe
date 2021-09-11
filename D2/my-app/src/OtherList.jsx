import { useContext } from "react";
import { Context } from "./Provider";

const OtherList = () => {
	const other = useContext(Context);
  return (
    <ol>
      {other.map((value, i) => (
        <li key={ i }>{value}</li>
      ))}
    </ol>
  );
};

export default OtherList;
