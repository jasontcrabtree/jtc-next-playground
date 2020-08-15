import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { ENROLLED_STUDENTS } from './users';

const ADD_TODO = gql`
  # mutation Variables($object: mastering_nextjs_insert_input!) {
  #   insert_mastering_nextjs_one(object: $object) {
  #     id
  #     name
  #     picture
  #     isActive
  #     premium
  #     timeStarted
  #   }
  # }
  # mutation Variables($object: mastering_nextjs_insert_input!) {
  #   insert_mastering_nextjs_one(object: $object) {
  #     name
  #   }
  # }
  mutation {
    insert_mastering_nextjs_one(object: { name: "Simon" }) {
      name
    }
  }
`;

function AddUser() {
  let object;
  const [addTodo] = useMutation(ADD_TODO);

  const updateCache = (cache, { data }) => {
    // Fetch the todos from the cache
    const existingTodos = cache.readQuery({
      query: ENROLLED_STUDENTS,
    });
    // Add the new todo to the cache
    // const newTodo = data.insert_todos.returning[0];
    cache.writeQuery({
      query: ENROLLED_STUDENTS,
      // data: { todos: [newTodo, ...existingTodos.todos] },
    });
  };

  // const [todoInput, setTodoInput] = useState('');

  /*   const resetInput = () => {
    setTodoInput('');
  }; */
  /*
  const [addTodo] = useMutation(ADD_TODO, {
    update: updateCache,
    onCompleted: resetInput,
  }); */

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { object: object.value } });
          object.value = '';
          addTodo(e.target.value);
        }}>
        <input
          ref={node => {
            object = node;
          }}
          onChange={e => addTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
export default AddUser;
