import MovieComponent from "./components/MovieComponent";
import './App.css'
function App() {
  // const [title, setTitle] = useState("");

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1"
  //   );
  //   const task = await response.json();
  //   console.log(task);
  //   setTitle(task.title);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // return (
  //   <>
  //     <h1>{title}</h1>
  //   </>
  // );
  return (
    <div className="App">
      <MovieComponent />
      {/* Add more components as needed */}
    </div>
  )
}

export default App;
