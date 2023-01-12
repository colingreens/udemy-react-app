import UsersList from "../components/UserList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Colin Benson",
      image:
        "https://images.unsplash.com/photo-1669424327315-21e9a142c90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Kirsten",
      image:
        "https://images.unsplash.com/photo-1669461734596-b126134d0dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
