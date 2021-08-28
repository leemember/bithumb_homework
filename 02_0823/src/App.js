import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import { TodoProvider } from "./TodoContext";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <TodoProvider>
        {/* 투두리스트 템플릿 */}
        <TodoTemplate>
          {/* 투두리스트 헤더 */}
          <TodoHead />
          {/* 투두리스트 */}
          <TodoList />
          {/* 투두리스트 생성버튼 */}
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </Wrap>
  );
}

export default App;

const Wrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
