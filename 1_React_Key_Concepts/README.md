# React Key Concepts

1. The Birth of SPA(Single Page Applications)

    - Traditionally we just had html files for each page and every time we moved to a different page, we would request from the server, well, the html file, the css file and the JavaScript file, which usually contains JQuery for each time we clicked on a link.

    - Now the system is completely different, what generally happened now is we focus less on HTML and a lot more in JavaScript.
    You only load the application code once.
    Instead of us making new requests to the server, where we returned a new document instead, now our applications acted more like a desktop application, where we stay on the same page the entire time and the JavaScript file simply changes or updates the HTML file or the DOM to display new things.
    So you were able to sign into an application and interact with that application without ever speaking to the server anymore, And this way of writing applications or single page applications(SPA) became really, really popular.

2. Declarative v/s Imperative

    1. Don't touch the DOM. I'll do it.

        - You see, many existing frameworks and libraries before React where directly manipulating the DOM on every page.
        
        - DOM is our Document Object Model, It's what the browser uses to display a Web Site or a web app, and Javascript is simply manipulating this Dom, that's all javascript is doing.
        The DOM is just the tree representation of the page.

        - This way of programming was called "Imperative": that is in an imperative paradigm you directly change individual parts of your app in response to various user events. 

        - The problem with this imperative approach is that it becomes difficult to see the relationships between events and all these edge cases.

        - Instead of this imperative approach "React" came up with a novel concept a more "declarative" approach and this is what React says to you, "Hey Dom manipulation is one of the biggest performance bottlenecks".
        It takes a long time for Dom changes to happen.
        The browser has to do two really intensive operations.
        One is to "repaint", that is change an element and added onto a page and 
        then "refloat" which is to recalculate the layout of the page and move things around if need be.
        So changing the Dom was a really expensive operation.
        So React says: hey you know what.
        Let me take care that I'll find the best way for me to change the Dom and just declare to me what your app looks like.
        So all we need to do is say hey this is a javascript object of how I want the app to look and React is going to hold this javascript object this massive massive blueprint of how things should look.And based on this blueprint that we give it React just says hey just tell me what the page should look like and I'll take care of it. I'll do everything for you.
        I'll find the best way to use the DOM.
        You're never going to touch the DOM. Just tell me what the page should look like.
        This declarative paradigm is called that because we declare that hey this is what the state or data of our app should be like.
        And based on this date.
        Well then just make those changes.
        So if a user is logged in then React already knows exactly what to update and what to do.
        Now this idea of a declarative style meant that we didn't have to directly say do this and if this happens then do that where we just say one by one exactly what should happen.
        Instead we tell it this is the state of our app and React automatically just does it for us.
        The difference is that all the different states are accounted for in one place.
        That is one big javascript object that describes how our app should look.
        And this resulted in less complexity better code quality and faster developer times.
        So it created this whole idea of: hey you can build web interfaces without touching the Dom and this is where the name React came from. The name React is simply saying hey based on whatever the state or data of the app is that describes our app, I'm just going to React to it and change everything for you so that you get the display that you want.

    2. Component Architecture

        - React is based on resuasable components architecture.

    3. Unidirectional data flow

        - This idea of a uni directional dataflow means that any time we want something to change on our web page, well, the state has to change.That is, the data has to change in our app.

        - React as soon as the state changes, reacts to that change and says, hey, the state just changed, combine the new state and the components we have and update the DOM.
        You see the data only flows one way.

        - The key takeaway here is that by having this restriction of data, only being able to move down from the state of our application all the way to the down, and if any changes or events happen that changes the state while we go back to the state and that state, change trickles down to different components.
        And one direction is a restriction on how data can move through our app, and by adding this restriction, it's really easy to debug code.

    4. I am just a UI, the rest is up to you

        -  React said, hey, I only care about this whole idea of "components" and "virtual dom" and I only am going to work with the view, the user interface, everything else that you need.Well, you can just use other modules, other libraries and mix and match and have whatever you want customized to your need.
        So it was a library, a UI library.


3. React Key Terms

    1. Declarative
    2. State
    3. JSX
    4. Components
    5. Props
    6. Virtual DOM

4. The Job of a React Developer

    1. Decide on Components
    2. Decide the State and where it lives
    3. What changes when state changes
    