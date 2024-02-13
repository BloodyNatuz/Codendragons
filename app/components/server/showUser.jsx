import { sql } from "@vercel/postgres";

export default async function Cart() {
  const { rows } = await sql`SELECT * from USERS`;

  return (
    <div>
      {rows.map((row) => (
        <div>
          <p>ID : {row.id}</p>
          <p>Email : {row.email}</p>
          <p>Username : {row.username}</p>
        </div>
      ))}
    </div>
  );
}