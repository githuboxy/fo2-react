# fo2-react

### Prerequisite
Make sure you have latest NodeJs installed on

https://nodejs.org/en/download/


**For development mode make sure you clone fo2 fake Server**
```
Step-1 : git clone https://github.com/githuboxy/fo2-fake-server.git 
Step-2 : cd fo2-fake-server
Step-3 : npm install
Step-4 : npm start
```

**Once fake server is up and running**
```
Step-1 : git clone https://github.com/githuboxy/fo2-react.git
Step-2 : cd fo2-react
Step-3 : npm install
Step-4 : npm start
```


**Need to understand Directory Structure**

```
   |-App       .....  Root Directory where we have app.js
   |-_helpers  ...... Different kinds of system level helper . eg: http call helper 
   |-common    ...... common moudule
   |---actions
   |---components
   |---constants
   |---pages
   |---reducers
   |-rootindex  .....  root index will glue all components together
   |-user       .....  module 
   |---actions
   |---components
   |---constants
   |---pages
   |---reducers
   |---services
   
```   
   
   
   
   **Each module should have following six subdirectories**
   
   ```
   |---actions .   .....  Actions related to the module
   |---components  .....  All module level react components
   |---constants   .....  constants which will use through out module
   |---pages       .....  Actual react views
   |---reducers    .....  module specific reducers 
   |---services    .....   All Module level service which make actual backend call and populate redux state
   
   ```









