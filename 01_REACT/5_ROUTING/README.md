# React Routing

Routing is the process of changing View Pages with URL change in a Web Application. It is kind of a switch where you can switch between any View state based on current URL in the browser address bar.

## Basic Routing

In react we use libary `react-router-dom` to setup the basic routing.

### Setup 

```bash
npm install react-router-dom

```

import `react-router-dom` and in `App.js` file where we will use routing.

```js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

```

We have imported 3 components, let's understand them :

### Router 

This the parent component which encloses the area where routing will be active. So any dynamic view of application should be inside this Component Tag.


```jsx

  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>


```

### Route

Route is the conditional section which runs only when `path` matches the URL in browser. Path can be simple string as given above or a regular expression.

### Link

Link is equivalent of `<a href="">` in html. It takes you from one URL (or path) to another. Whenver you click on a Link it will change the current path.



## Types of Routing

You can perform routing using 2 popular methods :

1. using `component` props

This one can be used if your components are simple and they don't need to be passed any props from parent component. So this is ideal method for static pages.

```jsx
        <Route path="/about/" component={About} />
```

This will open About component on `\about` path in URL. 

2. using `render` props

This way is better when you want to pass some props from Parent component to Children component in Route.

```jsx

<Route path="/home" render={(props) => <Child {..props} list={[1,2,3]}> Home</Child>}/>

```
In above example we are passing parent props in destructured way, also we can passing a new prop `list`.


### Using Route params

Route params is a popular way to re-use same view or Component to show details of various different database objects. We use same URL with a parameter which helps in pulling new data in the same View.

```html
  <ul>
            <li>
              <Link to="/category/books">Books</Link>
            </li>
            <li>
              <Link to="/category/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/category/cars/">Cars</Link>
            </li>
 </ul>

```

As you can see all links are similar and similar component can serve in Route for all of these. We can use a common route as

```jsx

 <Route path="/category/:categoryName" component={About} />

```
Here `categoryName` is a parameter which will take different values. Let's see how we can extract it's value in next section


### Router props

Router component passes 3 props to each child `match`, `location`, `history`. Lets understand each of them one by one :


1. Match

A match object contains information about how a <Route path> matched the URL. match objects contain the following properties:
`params` - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
`isExact` - (boolean) true if the entire URL was matched (no trailing characters)
`path` - (string) The path pattern used to match. Useful for building nested <Route>s
`url` - (string) The matched portion of the URL. Useful for building nested <Link>s


You can access match object in props : `props.match`. 

To access route params as given in above example of categories use `props.match.params.categoryName`. 

2. History

The term “history” and "history object" in this documentation refers to the history package, which is one of only 2 major dependencies of React Router.

history objects typically have the following important properties and methods:

`push(path, [state])` - (function) Pushes a new entry onto the history stack
`replace(path, [state])` - (function) Replaces the current entry on the history stack
`go(n)` - (function) Moves the pointer in the history stack by n entries
`goBack()` - (function) Equivalent to go(-1)
`goForward()` - (function) Equivalent to go(1)
`block(prompt)` - (function) Prevents navigation (see the history docs)


3. Location

Locations represent where the app is now, where you want it to go, or even where it was. It looks like this `this.props.location`