# GIT Basics

Let's see how to use git to maintain all your code projects locally and on various Remote services like `GitHub`

## Lab Task : Setup Git on your system

After installing the git command line interface. Check whether git is working by following command (In Terminal/CMD):

```shell
git

```

You have to setup your `name` and `email` address globally. This name and email provides the author's identity on git.

```
git config --global user.name "Abhishek Rathore"
git config --global user.email "abhishek.rathore@youstart.in"
```
You can check `user.name` and `user.email` after setting these properties :

```
git config -l
```

# Creating a new project on Git 

## 1. Creating a new project with Git 

1. Go to project directory and initialize git

``` 
git init
```

2. Add files which you want to save(staging)

``` 
git add <name-of-file>
```
 or add all files in the project directory

```
git add .
```
3. Create your first commit. You can provide a commit message which you like. This will commit i.e save your files in git history and you can go back to this stage any time in future

```
git commit -m "first commit message"
```

4. Add a remote repository (which you have created on github.com) to your project :

```
git remote add origin <your-git-repo-address>
```

5. Finally, push your project to github :

```
git push origin master
```


## 2. Saving further changes

Once you setup the repository. You can keep on working on existing file/ add new files or remove files.

Once you are at a stable point you can again `commit` the changes in your second commit.

1. Go to project directory and add files which you want to save(staging)

``` 
git add <name-of-file>
```
 or add all files in the project directory

```
git add .
```

2. Create your second commit. You can provide a commit message which you like.

```
git commit -m "some changes"
```

3. Finally, push your project to github :

```
git push origin master
```

In short, this is the cycle you have to repeat everytime you want to save your project changes.

```
git add (staging)  --- > git commit ----> git push

```

## Lab Task

1. Add a file `example.txt` with some text message in one line
2. Git add/commit/push to github and check github repo. Can you see the difference in this commit. Click on commit number in github to see the difference. Checko out red and green areas. 
3. Change `example.txt` and add a second line with some text
4. Repeat step 2.
5. Add another file `demo.txt` with some text and repeat step 2.
6. Add another file `dummy.txt` with some text and repeat step 2.
7. Remove a line from `example.txt` and repeat step 2.
7. Check output of command `git log` command.


# Cloning a existing project from Git 

## 1. Copying existing Project from Remote Git

if you are not making project on your local and copying an exisitng project on git. You will not create the project using `git init` command. Rather you will use `git clone` command to clone the remote repo to you system.

```
git clone <remote-repo-address>
```
## Lab Task

1. clone the repo : `https://github.com/BlackrockDigital/startbootstrap-creative`
2. Open the downloaded repo in VSCode editor.
3. Run the HTTP-Server and check `http://localhost:8080` for ouput




## 2. Pulling changes done by other developer.

If you want to pull changes done by someone else on a repository which you have on your local system (by cloning or init)

Then you can use git pull command to get latest change. This command will only be helpful for updating your code to latest version available on remote (like GitHub)

```
git pull origin master

```


# Publishing changes on your Github Hosting 

If you have a repository which you can write on github (public access). If you have create a new project then `remote` will be your github repo. However if you have cloned the repo. You will have to remove remote using `git remote remove origin` and then add new origin `git remote add origin <your-repo-name>`


 Then you can make a `branch` `gh-pages`

```
git branch gh-pages

```

and push the changes on this branch.

```
git push origin gh-pages

```

Your site will be availalbe on `https://<your-username>.github.io/<your-repo-name>/`. Replace `your-username` and `your-repo-name` with appropriate values.