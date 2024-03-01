/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo {

  todoCon

  constructor() {
    this.todoCon = []
  }

  add(todo) {
    this.todoCon.push(todo)
  }

  remove(indexOfTodo = 1) {
    if (indexOfTodo < 0) { return false }

    for (let index = 0; index < this.todoCon.length; index++) {
      if (index === indexOfTodo) {
        this.todoCon[index] = '-1'
      }
    }

    console.log(this.todoCon);

  }

  getAll() {
    for (let index = 0; index < this.todoCon.length; index++) {
      (this.todoCon[index] != -1) ?
        console.log(this.todoCon[index]) : null
    }
  }
}
const obj = new Todo();

obj.add('A')
obj.add('B')
obj.add('C')
obj.add('D')
obj.getAll()
obj.remove(0)
obj.getAll()

module.exports = Todo;
