import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  console.log("data", response.data);
  const todo: Todo = response.data;

  const id = todo.id;
  const finished = todo.completed;
  const title = todo.title;
  console.log(`
  the todo id og ${id}
  has the title of ${title}
  is it finished ${finished}
  `);
});

const profiles = {
  age: 4,
  name: "Ade",
  coords: {
    lat: 0,
    lon: 5,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  coords: { lat, lon },
}: { coords: { lat: number; lon: number } } = profiles;
