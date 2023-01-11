import UsersList from "../components/UserList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Colin Benson",
      image: "https://images.pexels.com/photos/728411/pexels-photo-728411.jpeg",
      places: 3,
    },
    {
      id: "u2",
      name: "Kirsten",
      image:
        "https://images.pexels.com/photos/14910487/pexels-photo-14910487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
