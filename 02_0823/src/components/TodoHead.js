import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

// 오늘의 날짜와 요일 남은 할 일의 개수 뿌려주기

function TodoHead() {
  //함수 선언
  const todos = useTodoState();
  console.log(todos);
  //todo가 done이 안된 것들만 골라서 필터에 집어넣는다.
  const undoneTasks = todos.filter((todo) => !todo.done);
  const today = new Date();

  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>현주의 투두리스트</h1>
      <h2>
        {dateString} {dayName}
      </h2>
      <div className="tasks">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0 auto;
    font-size: 2.5rem;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 2rem;
  }

  .tasks {
    color: #ff4c9c;
    font-size: 1.4rem;
    margin-top: 40px;
    font-weight: 700;
  }
`;
