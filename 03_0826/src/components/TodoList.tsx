import * as React from "react";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

// 타입 선언
interface IInput {
  input: string;
}

interface ITodoItem {
  idx: number;
  todo: string;
  isDelete: boolean;
  onDelete?: Function;
}

interface ITodoList {
  todoList: ITodoItem[];
}

//-----------------------------------------
// 이벤트 핸들링
function TodoList() {
  //상태관리 초기값
  const [iInput, setInput] = useState<IInput>({
    input: "",
  });

  const [iTodoItem, setTodoItem] = useState<ITodoItem>({
    idx: 0,
    todo: "",
    isDelete: false,
  });

  const [iTodoList, setTodoList] = useState<ITodoList>({
    todoList: [iTodoItem],
  });

  // 리랜더링 후에 iTodoItem이 보여질 수 있도록 배열 안에 입력
  useEffect(() => {
    setTodoList({
      todoList: iTodoList.todoList.concat(iTodoItem),
    });
  }, [iTodoItem]);

  //입력 이벤트
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (iInput.input.length > 0) {
      setTodoItem({
        idx: iTodoItem.idx + 1,
        todo: iInput.input,
        isDelete: false,
      });
    }

    setInput({
      input: "",
    });
  };

  //입력창 이벤트
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(iInput, name, value);
    setInput({
      input: value,
    });
  };

  //삭제 이벤트
  const onDelete = (idx: number) => {
    const newTodo: ITodoItem[] = iTodoList.todoList.filter(
      (item) => item.idx !== idx
    );
    setTodoList({
      todoList: newTodo,
    });
  };

  const TodoList = iTodoList.todoList.map((data, idx) => (
    <TodoItem
      key={idx}
      idx={data.idx}
      todo={data.todo}
      isDelete={data.isDelete}
      onDelete={onDelete}
    />
  ));

  return (
    <TodoMain>
      <h2> 타입스크립트 버전 TODO-LIST </h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="content"
          value={iInput.input}
          onChange={handleInput}
        />
        <button type="submit" className="add">
          추가
        </button>
      </form>

      <TodoBox>{TodoList}</TodoBox>
    </TodoMain>
  );
}

export default TodoList;

const TodoBox = styled.ul`
  width: 500px;
  margin: 0 auto;
  border: 1px solid #494949;
  border-radius: 10px;
  padding: 1em;
  height: 500px;
  overflow: auto;
  margin-top: 2em;
`;

const TodoMain = styled.main`
  h2 {
    font-size: 2rem;
    color: hotpink;
  }
  form {
    width: 534px;
    margin: 0 auto;
    display: flex;
  }
  input {
    padding: 0.5em;
    font-size: 1.2em;
    color: gray;
    width: 80%;
  }
  .add {
    padding: 0.5em;
    font-size: 1.2em;
    color: gray;
    background: bisque;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 20%;
    &:hover {
      color: #262626;
    }
  }
`;
