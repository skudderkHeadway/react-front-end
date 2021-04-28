import { gql, useQuery } from "@apollo/client";

const GraphQlTest = () => {
  const USER_1_QUERY = gql`
    query {
      user(id: 1) {
        name
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(USER_1_QUERY);

  return (
    <>
      <div>GraphQlTest</div>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data && (
        <>
          <p className="border">We have data!</p>
          {data?.user?.name && <p>User's name is: {data.user.name}</p>}
          {data?.user?.email && <p>User's email is: {data.user.email}</p>}
        </>
      )}
    </>
  );
};

export default GraphQlTest;
