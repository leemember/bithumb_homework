import styled from "styled-components";

interface IList {
  idx: number;
  todo: string;
  isDelete: boolean;
  onDelete: Function;
}

function TodoItem(props: IList) {
  const handleDelete = () => {
    props.onDelete(props.idx);
  };

  return (
    <>
      {props.idx !== 0 && !props.isDelete && (
        <List>
          <span>{props.idx}.</span>
          <p>{props.todo}</p>
          <button onClick={handleDelete}>삭제</button>
        </List>
      )}
    </>
  );
}

export default TodoItem;

const List = styled.li`
  font-size: 1.3rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  color: hotpink;
  span {
    margin-right: 0.5em;
  }
  button {
    margin-left: 1em;
    padding: 0.8em;
    border: none;
    border-radius: 10px;
    font-size: 0.7em;
    cursor: pointer;
  }
`;
