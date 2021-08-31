# 🌅 TS로 투두리스트 만들기 (8/26 목)

## 👉 과제 미션

1. 타입스크립트 언어로 추가 기능만 넣기

<Br />

## 🖥 화면 결과물

![](https://images.velog.io/images/leemember/post/26d6923e-9851-4033-bda4-813992e422e3/%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%90%E1%85%AE%E1%84%83%E1%85%AE01.gif)

![](https://images.velog.io/images/leemember/post/fadda42c-b088-4ee3-b763-7c725cb2190a/%E1%84%90%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%90%E1%85%AE%E1%84%83%E1%85%AE2.gif)

## 📂 폴더 구조

```
📦 src
 ┣ 📂components
 ┃ ┃ ┣ 📜 TodoItem.tsx
 ┃ ┃ ┗ 📜 TodoList.tsx
 ┃ ┣ 📜 App.tsx
 ┃ ┗ 📜 index.tsx
```

<br>

## 🐥 TodoList.tsx 코드 설명

<br />

### interface로 타입 선언하기

```
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

```

> 입력될 input 태그와 투두리스트 아이템, 투두리스트 이렇게 명확하게 타입값을 인터페이스 방법으로 지정합니다. `ITodoItem` 에는 순서와 todo 내용이 입력될 문자열과 삭제 (논리형), 그리고 onDelete라는 이벤트 값 function 함수 타입을 지정합니다. 그리고 ITodoList에는 ITodoItem의 아이템들이 여러개 들어갈 것이니 배열로 나타내기 위해 [] 대괄호로 나타내줍니다.

<br />

### 이벤트 핸들링 타입 부여

```

function TodoList() {
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

  useEffect(() => {
    setTodoList({
      todoList: iTodoList.todoList.concat(iTodoItem),
    });
  }, [iTodoItem]);

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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(iInput, name, value);
    setInput({
      input: value,
    });
  };

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

```

> `useState` 로 초기값을 나타냅니다. 그리고 `const [iTodoList, setTodoList] = useState<ITodoList>({` 이렇게 제너릭 타입으로 나타냈습니다. useEffect는 [] 이 배열값 안에 함수명을 넣으면 리랜더링 될 때 보여지는 것을 도와줍니다. 그리고 이벤트 핸들러를 도와주는 기능에서는 매개변수 e는 element를 의미하는데 여기에 타입을 쉽게 추론해주는 에디터의 도움을 받으면 훨씬 더 수월하게 작업할 수 있습니다. 타입 추론해주는 방법으로는 return 값에 담긴 이벤트 핸들러 메서드 (ex) onChange, onSubmit 등등. 에 마우스를 올려놓으면 `React.ChangeEvent<HTMLInputElement>` 이렇게 친절하게 알려줍니다.

<br />

### 화면에 뿌려지는 구간 return

```
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

```

> 마크업을 완료한 후, 이벤트를 부여 시켜 줄 이벤트 메서드와 함수명을 담아줍니다.

<br />

### 스타일 선언

```

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
```

> 그냥 두기에는 허전해서 `styled-components`를 이용하여 스타일을 꾸며보았습니다. 😃
