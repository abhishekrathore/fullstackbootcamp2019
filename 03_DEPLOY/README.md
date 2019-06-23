# Deploy Node.js App on Heroku Cloud


## Before Starting Deployment - Check Application Locally


1. If you have react application ready to be built - check if you have refereneces of server as `http://localhost:8080/tasks` or something similar. As you will now move react app to Node Server you don't need to mention the server address. So replace `http://localhost:8080/tasks` with onlu `\tasks`. Search your project and remove all such references.

2. Use `npm run build` command to build the react application. You will get the output in `build` directory.

3. Move the `build` directory to inside of your node project. At same place where your `index.js` file is placed.

4. Add static middleware to your Backend `index.js` file. Pass `build` folder address in static directory location.

```js
server.use(express.static('build'));
```
5. Run you server locally to check you can access the react app on `localhost` using server port number. And everything is running fine.

6. Please check that you should not have a GET API with `/` path. Else it can interfere with static files.



## Preparing for Heroku Deployment.

1. Change PORT number from static values like `8080` to `process.env.PORT`. This will let Heroku server assign a new PORT to your application according to port availability.

2. Install Heroku Command Line. ![Download Page](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

3. Use `heroku login` command to login into your heroku account which you have created earlier. If you have not created a heroku account - go to heroku.com and create one.

After successful login you are now ready to deploy your projct to Heroku.


## Deplying the Project on Heroku.

1. Before starting make sure your server project is Git project. Otherwise use command `git init` to make it a git project.

2. You can also ignore `node_modules` folder from uploading by creating a file `.gitignore` in same directory as `package.json`. In `.gitignore` write the following line :

```
node_modules

```

3. Open `package.json` of backend and write `start` command in script section - as given below.

```json

 "scripts": {
    "start":"node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }

```

4. Now run command `heroku create` in same folder where you have `package.json` file of server. This will initialize a new app on cloud and also create a git remote `heroku` for you. Commit all changes using `git commit` command.

5. Use command `git push heroku master` to upload your code to heroku cloud. In the end you will get a URL to your deployed app.
6. You can check for any error in deployed app using `heroku logs --tail` command.
7. Once you make any change in your code - commit your changes. And then use `git push heroku master` command to deploy a new version of your app.



