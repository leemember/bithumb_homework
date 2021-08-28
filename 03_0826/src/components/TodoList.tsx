import React, { useState, useEffect, useCallback } from "react";

//interface 3개 생성
interface Iinput {
  input: string;
} //end

interface ITodoItem {
  idx: number;
  todo: string;
  isDelete: boolean;
  onDelete: Function;
} //end

//  todoList: ITodoItem[]; 배열로 지정
interface ITodoList {
  todoList: ITodoItem[];
} //end

function TodoList() {
  //e는 element 라는 뜻으로 많이 사용한다.
  // input 값을 초기화 시켜준다.
  const [iInput, setInput] = useState<Iinput>({
    // 🤍 iInput이거랑 <Iinput> 이거 연동해서 value에다가 넣어보자.
    input: "",
  });

  //이번에도 제너릭의 타입으로 넣겠다!
  const [iTodoItem, setTodoItem] = useState<ITodoItem>({
    idx: 0,
    todo: "string",
    isDelete: true,
    onDelete: Function,
  });

  //📍추가
  const onSubmit = () => {}; //end
  useEffect(() => {
    console.log("item 항목 업데이트 될 때 발생한다");
  });

  //📍input 창에 입력되도록
  const handleInput = () => {}; //end

  //📍삭제
  const onDelete = () => {}; //end

  //📍투두리스트
  const TodoList = () => {}; //end

  const mc = { fontSize: "20px", color: "blue" };
  const mk = { fontSize: "18px", color: "pink" };

  return (
    <div>
      <h3>TodoList.tsx 문서</h3>

      <div>
        <form onSubmit={onSubmit}>
          <label style={mc}>
            입력 TODO :
            <input
              type="text"
              style={{ padding: "3px" }}
              value={iInput.input}
            />
          </label>
          <button type="submit" style={mk} onChange={handleInput}>
            추가
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoList;
