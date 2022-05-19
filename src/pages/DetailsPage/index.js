import HeroBanner from "../../components/HeroBanner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceById } from "../../store/DetailsPage/actions";
import {
  getLoading,
  getDetails,
  getSpaces,
  sortedStories,
} from "../../store/HomePage/selectors";
import { useParams } from "react-router-dom";

export default function SpaceDetails() {
  const { id } = useParams();
  console.log(id);
  const details = useSelector(getDetails);
  console.log("detailspaces", details);
  const loading = useSelector(getLoading);
  console.log("loading", loading);
  //const sortStories = useSelector(sortedStories);
  //console.log("sortedStories??", sortStories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);
  return (
    <div>
      <HeroBanner>
        <h1>Space Details</h1>
        {loading || details === null ? (
          "Loading"
        ) : (
          <div>
            <div
              className="specificSpaceCard"
              style={{
                background: details.backgroundColor,
                color: details.color,
                width: 300,
                margin: 10,
              }}
            >
              <h1>{details.title}</h1> <p>{details.description}</p>
            </div>{" "}
            <img href={details.stories.imageUrl} />
            {details.stories.map((story) => (
              <div>
                <h3>{story.name}</h3> <p>{story.content}</p>
              </div>
            ))}
          </div>
        )}
      </HeroBanner>
    </div>
  );
}
