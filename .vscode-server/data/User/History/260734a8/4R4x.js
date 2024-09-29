// script.js: BYU IT&C 210a JavaScript
function on_submit(event) {
    let formData = new FormData(event.currentTarget);
    let json = JSON.stringify(Object.fromEntries(formData));
    alert(json);
    event.preventDefault();
}


class Task {
    constructor({ text, date, done, id }) {
        // HINT This method is the constructor. In C++, this would be
        // the Task() method. The curly braces inside the constructor is // a JavaScript syntax that is called 'deconstruction'. This
        // means the constructor will ask for an object
        // (`{i: 'am', an: 'object'}`) with the parameters `text`,
        // `date`, `done`, and `id`. This will make it easier to
        // convert it from the local storage database we will set up.
        this.text = text
        this.date = date
        this.done = done
        this.id = id
    }
    toHTML() {
        // TODO: Fill out this method. It should return a string version
        // of this task, including an `<li>` tag and all of the
        // css classes you used to make it look pretty. It should
        // display the `text`, `date`, and `done` property of this
        // Task. It should also have two inline event handlers, which call the
        // update and delete function, with this Task's `id` as a
        // parameter.
        return `
        
        `;
        
    
    }
    prettyDate(date) {
        // TODO: Fill out this method. It should return the date in our
        // locale's format, 'MM / DD / YYYY', instead of the
        // easily-sortable international standard, 'YYYY-MM-DD'.
        const d = new Date(date);

        d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }); 

        return d;
    }
    toggle() {
        // TODO: Fill out this method. It should flip this Task's `done`
        // property from `true` to `false`, or from `false` to `true`.
        this.done = !this.done;
    }
}

function updateStorage(newData) {
    // ... update the local storage
    localStorage.setItem('database', jsonString);
    let jsonString = JSON.stringify(newData);
}

function readStorage() {
    // ... read from the local storage
    localStorage.getItem('database');
    let result = JSON.parse(jsonString) || [];
    result = result.map(taskData => new Task(taskData))

    return result
}

function createTask(event) {
    // TODO: Pull in form data from DOM
    // TODO: Format form data to Task Object
    // TODO: Pull in tasks from local storage and push new one to task list array
    // TODO: Save it to local storage
    // TODO: Update DOM (Call readTasks())
    // Hint - Look at the JavaScript code from lab 1B to see how to extract form data

    const taskText = document.getElementById(this.text);
    const taskDate = document.getElementById(this.date);
    const taskDone = document.getElementById(this.done);

    let tasks = [
        new Task({
          text: this.text ,
          date: this.date ,
          done: this.done,
          id: Date.now() // makes a unique id
      })
    ]

    let oldTasks = readStorage();

    updateStorage(tasks);

}

function readTasks() {
    // TODO: Clear current tasks to not have duplicates
    // TODO: Pull in tasks from local storage
    // TODO: Parse tasks and Update DOM accordingly
    // Clear current tasks to not have duplicates

}

function updateTask(taskId) {
    // TODO: Update the task in `tasks` array by flipping it's `done` value
    // TODO: Save to local storage
    // TODO: Update DOM (Call readTasks())
    // Pull in tasks from local storage

}

function deleteTask(taskId) {
    // TODO: Delete task from `tasks` array
    // TODO: Save to local storage
    // TODO: Make the DOM update
    // TODO: Update DOM (Call readTasks())
    // Pull in tasks from local storage
    
}