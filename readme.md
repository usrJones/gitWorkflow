

## Git workflow for planning and testing
This project is for (1) designing a git workflow for personal use, (2) testing it for implementing in future projects, (3) and used as a personal cheatsheet.  
The following acts as a baseline:
> Code close to master, keep commits small:
>  - easy-to-read commit history
>  - encourages pull requests and easy code reviews
>  - fewer merge conflicts

-----

## Branching and workflow

### Starting a project
Initialize, add & commit locally.  
Create a develop branch, make it your default.  
Add and push everything, so that GitHub is up to date.  

### Developing a feature
Create a feature branch describing your work.  
Finish up with a commit & push.  
Switch back to develop and merge in your work.  
Don't forget to delete the extra branch from local & remote.  
Push into develop, merge & push into master as well.  

### Multitasking features
Commit & push your incomplete work.  
Branch out from develop to whatever you are going to do.  
Finish work, commit & push.  
Merge it back into develop, push it there as well.  
Delete that extra branch.  
Return to that incomplete work you left for yourself.  

### You're slow, others are finished
There's a new version in develop and you're still writing.  
Just pull the updated develop into your feature.  
Deal with the possible conflicts and go on with your work.  

-----

## Useful git commands
git config --list	<-- show global configuration file  
git config --global user.email 'robert (at) clownpenis.fart'  
git config --global user.name 'hidemyrealname'  

git init			<-- initialize git, make it "track" current project folder  
git add .			<-- add all into "staging area" from working directory  
git commit -m "msg"	<-- commit everything from "staging" to branch  
git status			<-- shows status of initialized project folder  
git log				<-- shows history of commits in a branch  

git clone [url]  			<-- copy everything from remote  
git clone [url] [newName]	<-- define a different name as you clone  

git remote add origin [url]	<-- add to remote  
git push -u origin master	<-- "-u" makes origin master as default  
git pull origin master		<-- get latest version from "remote repo"  

git branch						<-- list all available branches  
git checkout -b [name]			<-- create and switch to it  
git checkout [name]				<-- switch to another branch  
git merge [name]				<-- merge [name] branch into current branch  
git branch -d [name]			<-- delete a branch locally  
git push origin --delete [name]	<-- delete from remote

