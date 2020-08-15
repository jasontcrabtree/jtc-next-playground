import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from '@apollo/client';

import EnrolledStudents from '../components/users';
import AddUser from '../components/AddUser';
import AddTodo from '../components/AddTodo';

const client = new ApolloClient({
  uri: 'https://jtc-nextjs-course.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

client.query({
  query: gql`
    {
      mastering_nextjs {
        name
      }
    }
  `,
});
// .then(result => console.log(result));

export default function Home() {
  return (
    <ApolloProvider client={client} className="container">
      <div
        style={{
          fontFamily: 'sans-serif',
          backgroundColor: 'black',
          color: 'whitesmoke',
          padding: '24px',
          margin: '-8px -8px',
          height: '100vh',
        }}>
        <h1
          style={{
            display: 'grid',
            margin: '0 auto',
            width: 'fit-content',
          }}>
          My First Apollo App
        </h1>
        <AddUser />
        {/* <AddTodo /> */}
        <EnrolledStudents
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
        />
      </div>
    </ApolloProvider>
  );
}
