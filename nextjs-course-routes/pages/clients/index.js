import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Max",
    },
    {
      id: "manu",
      name: "Manuel",
    },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li>
              <Link href={"clients/" + client.id}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
