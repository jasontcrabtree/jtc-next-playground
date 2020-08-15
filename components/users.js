import { useQuery, gql } from '@apollo/client';

export const ENROLLED_STUDENTS = gql`
  query GetStudents {
    mastering_nextjs {
      name
      isActive
      timeStarted
      picture
      id
    }
  }
`;

function EnrolledStudents() {
  const { loading, error, data } = useQuery(ENROLLED_STUDENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat( auto-fit, minmax(240px, 1fr) ',
        gridGap: '1rem',
      }}
    >
      {data.mastering_nextjs.map(
        ({ name, timeStarted, id, picture, isActive }) => (
          <li
            key={id}
            style={{
              backgroundColor: '#111111',
              margin: '0',
              padding: '1rem',
              borderRadius: '0.5rem',
              listStyle: 'none',
            }}
          >
            <img
              style={{
                width: '200px',
                height: '200px',
                margin: '0 auto',
                display: 'flex',
              }}
              src={picture}
              alt={name}
            />
            <h1
              style={{
                width: 'fit-content',
                margin: '0 auto',
                display: 'flex',
              }}
            >
              {name}
            </h1>
            <p>{timeStarted}</p>
            <p>{isActive}</p>
          </li>
        )
      )}
    </ul>
  );
}

export default EnrolledStudents;
