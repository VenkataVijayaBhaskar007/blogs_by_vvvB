---
title: 'React Crash Course'
date: 'Sep 2, 2023'
excerpt: 'Crash course to learn the React JavaScript library. We will look at components, hooks and more'
cover_image: '/images/posts/img5.jpg'
---


# React Crash Course: Building Modern Web Applications with Ease



In the ever-evolving world of web development, staying up-to-date with the latest technologies is essential. One such technology that has been making waves in recent years is React, a powerful JavaScript library for building user interfaces. In this React crash course, we will dive into the fundamentals of React and guide you through the process of creating modern web applications with ease.

## What is React?

React, often referred to as React.js or ReactJS, is an open-source JavaScript library maintained by Facebook and a community of developers. It's designed for building user interfaces, particularly for single-page applications (SPAs) and mobile applications. React's key feature is its ability to efficiently update and render components when data changes, making it a popular choice for dynamic and responsive web applications.

## Getting Started

Before we dive into coding, let's set up our development environment. You'll need Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official [Node.js website](https://nodejs.org/).

Once you have Node.js and npm installed, you can create a new React application by using the Create React App tool. Open your terminal and run the following command:

```bash
npx create-react-app my-react-app
```

Replace `my-react-app` with your preferred project name. This command sets up a new React project with all the necessary configurations and dependencies.

## Components in React

In React, everything revolves around components. A component is a self-contained, reusable piece of the user interface. You can think of components as building blocks for your application. React applications are made up of multiple components that can be composed together to create complex user interfaces.

Here's an example of a simple functional component in React:

```jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

In this example, we've created a component called `App` that renders a heading with the text "Hello, React!".

## JSX: The Power of JavaScript and HTML

React uses JSX (JavaScript XML) to define the structure and appearance of components. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's a powerful feature that makes it easy to create component templates.

```jsx
const element = <h1>Hello, React!</h1>;
```

In this example, we've defined a JSX element that represents a heading with the text "Hello, React!". JSX allows us to seamlessly combine JavaScript logic and HTML structure.

## State and Props

In React, data management is crucial. Two fundamental concepts for handling data are **state** and **props**.

- **State**: State is used to manage data that can change over time within a component. You can think of it as the internal memory of a component. State allows components to be dynamic and responsive to user interactions.

- **Props**: Props (short for properties) are a way to pass data from parent to child components. They are immutable, meaning that child components cannot modify their props directly. Props enable you to create reusable and customizable components.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
```

In this example, we have a `Counter` component that uses state to keep track of a count value. When the "Increment" button is clicked, the state is updated, and the component re-renders.

## Building a React Application

Now that we've covered the basics of React, let's build a simple application. In this example, we'll create a task list application with the ability to add and remove tasks.

### Setting Up the Project

First, create a new React application using Create React App, as mentioned earlier.

```bash
npx create-react-app task-list
```

Next, navigate to your project folder and start the development server:

```bash
cd task-list
npm start
```

This will launch your application in development mode, and you can access it in your browser at `http://localhost:3000`.

### Creating Components

In your React application, you'll typically have multiple components. For our task list app, let's create two components: `TaskList` and `Task`.

#### Task.js

```jsx
import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
};

export default Task;
```

#### TaskList.js

```jsx
import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <div>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
```

### Using Components

Now, you can use the `TaskList` component in your `App.js` file:

```jsx
import React from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
```

### Styling with CSS

To style your components, you can use regular CSS files or popular CSS-in-JS libraries like styled-components or Emotion. For simplicity, let's create a `Task.css` file:

#### Task.css

```css
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
}

button {
  background-color: #ff6961;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
```

Import this CSS file in your `Task.js` component:

```jsx


import React from 'react';
import './Task.css'; // Import the CSS file

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
};

export default Task;
```

Now, your tasks will have a simple styling.

### Running the Application

With your components in place and your styles defined, you can now run your React application:

```bash
npm start
```

Your task list application should open in your browser, allowing you to add and remove tasks.

## Wrapping Up

This React crash course has introduced you to the basics of React, from setting up your development environment to creating components and building a simple application. React's component-based architecture, combined with its ability to manage state and props, makes it a powerful choice for developing modern web applications.

As you continue your journey with React, you'll discover a vast ecosystem of libraries, tools, and resources to help you build even more complex and feature-rich applications. Whether you're building a personal project or contributing to a large-scale application, React's flexibility and performance will serve you well in creating dynamic and responsive user interfaces.

Remember that this is just the beginning of your React journey. To deepen your understanding and mastery of React, explore advanced topics such as routing, state management with Redux or Mobx, and working with APIs. The React community is thriving, and there's no shortage of tutorials, documentation, and courses to help you expand your knowledge.

So, dive into the world of React, and start building amazing web applications with confidence. Happy coding!
