import { createClient, gql } from "urql";
import { initUrqlClient } from "next-urql";
const client1 = createClient({
  url: "https://api.spacex.land/graphql/",
});

const client2 = initUrqlClient(
  {
    url: "https://api.spacex.land/graphql/",
  },
  false /* set to false to disable suspense */
);

const QUERY = gql`
  {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
`;

export default async function HomePage() {
  const data = await client1.query(QUERY, {}).toPromise();
  console.log("DATA", data);

  return <></>;
}
