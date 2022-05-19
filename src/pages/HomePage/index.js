import HeroBanner from "../../components/HeroBanner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../../store/HomePage/actions";
import { NavLink } from "react-router-dom";
//import SpaceCard from "../../components/SpaceCard/SpaceCard";

import { getSpaces, getLoading } from "../../store/HomePage/selectors";

export default function Home() {
  const dispatch = useDispatch();
  const spaces = useSelector(getSpaces);
  console.log("selectors", spaces);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, []);
  return (
    <div>
      <HeroBanner>
        <h1>Home</h1>
        {loading
          ? "Loading"
          : spaces.map((space) => (
              <div
                className="spaceCard"
                style={{
                  background: space.backgroundColor,
                  color: space.color,
                  width: 300,
                  margin: 10,
                }}
              >
                {" "}
                <h2>{space.title}</h2> <p>{space.description}</p>{" "}
                <NavLink to={`spaces/${space.id}`}>
                  <button onClick={() => getSpaces(space.id)}>
                    Visit Space
                  </button>{" "}
                </NavLink>
              </div>
            ))}
      </HeroBanner>
    </div>
  );
}
