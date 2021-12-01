import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const bondhus = [
    {nam:'Rakib', age:'25'},
    {nam:'Mithu', age:'23'},
    {nam:'Dipu', age:'29'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        {
          bondhus.map(fd => <Friend bondhura={fd}></Friend>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
  }, [])

  return(
    <div>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Friend(props) {
  const {nam, age} = props.bondhura;
  const friendStyle = {
    color:'blue',
    backgroundColor:'lightgray',
    boxShadow:'10px 10px 20px gray',
    borderRadius:'10px',
    margin:'10px',
    padding:'10px',
    width:'300px',
    height:'200px',
    textAlign:'left'
  };
  return (
    <div style={friendStyle}>
      <h2>Name: {nam}</h2>
      <h3>Age: {age}</h3>
    </div>
  )
}

export default App;
