First of all you have to install the redux set up.

Once you did with the setup stuff then you have to create a project structure.

--> src foler to your root project.Then in src please check the below herarchy.


----src
-------components (Put all your components in this folder)
-------containers (Put all your containers in this folder)
-------services (this folder contains actions and reducers and constants)
----------actions (Here you put all your actions. Action is just only an simple object that contains type of that actions.)
----------reducers (Here you put all your reducers. Reducer is just only function that takes two parameters first is initalState and second one is action.
Here you can perform your changes in state by applying swith statements. )
----------constants (You can put all your constants that is used in actions)


Now the final part of your redux create store. createStore(reducer) createStore is a function that takes reducer as a parameter.
Final steps <Provider store={store}> provider tag that take store and wrap your componentContainer in provider.
That will provide your props in each wraped componentContainer. 

const store = createStore(countReducer);

  return (
    <Provider store={store}>
      <HomePageContainer/>
      <SeperateComponentConainer/>
    </Provider>
  );
  
  
