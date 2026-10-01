# Frontend - Backend
1. create project folder (lab7)
2. create two folder fontend and backend
3. open terminal and split it into two
4. open frontend in to left side terminal
5. open backend into right side terminal
6. in backend
   a. intialize backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and script
    ```
    "start":"node app.js",
    "dev": "nodemon app.js" 
    ```
    d. create app.js
7. In Frontend
    a. npm create vite@latest
    b. enter . as project name
    c. select framework as reast from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend

# Components
1. Simple JSX functions return HTML directly.
2. It must start with capital letter.
3. It should be treated as HTML tag and must be closed.
# Object destructure
It does not depend on order this property is not available then it is initialized with none.
```
const { rating, bname, price, qty, picUrl } = props.book;
```

Any component incluse styles:
1. External CSS-> create class index.html and use in component.
2. Internal CSS-> create property as object:
```
const qstyle={
    fontSize:'1rem',
    color:'blue',
    textAlign: 'center',
    backgroundColor: "lightgray',
}

```

then apply with style attribute and pass the object.
3. Inline CSS-> In this method, we use two curly bracket with style attribute. All the CSS property must be a single word, for example: text and align=>textAlign