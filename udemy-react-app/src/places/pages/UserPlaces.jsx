import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484404,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "u2",
    title: "Willis Tower",
    description: "Third tallest building in the western hemisphere!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Willis_Tower_From_Lake.jpg/800px-Willis_Tower_From_Lake.jpg",
    address: "223 S Wacker Dr, Chicago, IL 60606",
    location: {
      lat: 41.8788762,
      lng: -87.638109,
    },
    creator: "u2",
  },
];

export default function UserPlaces(props) {
  return <PlaceList items={DUMMY_PLACES} />;
}
