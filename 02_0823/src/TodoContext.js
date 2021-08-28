import React, { createContext, useContext, useReducer, useRef } from "react";

// 📍 투두리스트 초기 목록
const initialTodos = [
  {
    id: 1,
    text: "일찍 일어나기",
    done: true,
  },
  {
    id: 2,
    text: "강아지 밥주기",
    done: false,
  },
  {
    id: 3,
    text: "운동가기",
    done: false,
  },
  {
    id: 4,
    text: "리액트 공부하기",
    done: false,
  },
  {
    id: 5,
    text: "자바스크립트 공부하기",
    done: false,
  },
];

//📍상태관리
function todoReducer(state, action) {
  switch (action.type) {
    // 투두리스트 추가
    case "CREATE":
      return state.concat(action.todo);

    // 투두리스트 토글시 체크여부
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    // 투두리스트 제거
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      //에러 날 경우
      throw new Error(`${action.type}`);
  }
}

// 초기값 선언
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(6);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 여기서 state는 현재값을 의미한다.

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
