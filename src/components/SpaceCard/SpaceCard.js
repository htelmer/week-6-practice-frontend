import { useSelector, useDispatch } from "react-redux";
import { getSpaces } from "../../store/HomePage/selectors";

const SpaceCard = (props) => {
  const spaces = useSelector(getSpaces);
  const dispatch = useDispatch();
  return (
    <div className="spaceCard">
      <h2>{props.spaces.title}</h2>
      <p>{props.spaces.description}</p>
      <button>Visit Space</button>
    </div>
  );
};
export default SpaceCard;
