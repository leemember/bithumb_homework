import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

// 각 할 일 항목들을 보여주는 아이템박스
function TodoItem({ id, done, text }) {
  // 상태관리
  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      {/* TODO 체크박스 */}
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>

      {/* TODO 일정 텍스트 */}
      <Text done={done}>{text}</Text>

      {/* TODO 일정 삭제 */}
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;

//삭제
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e5;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

//투두리스트 아이템
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: block;
    }
  }
`;

//투두리스트 체크박스
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #ff4c9c;
      color: #ff4c9c;
    `}
`;

//투두리스트 텍스트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;
