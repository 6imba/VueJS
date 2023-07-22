<!-- 

# Predefined Event and handling it:
    # syntax:
        - v-on:click="count++"
        - @click="count++"
        - directive:eventName=eventHandler
    - v-on || @ directive is used to (trigger/listen/handle DOM-event)/(event-binding) in vue.
    - handler can be:
        1.inline handler ==> js code ==> use in simple cases
        2.method handler ==> js method ==> use in complex case
    
    # Inline Handler Cases:
        <button @click="count++">Increase Count</button> //js snippet
        <button @click="add()">Increase Count</button> //method invocation
        <button @click="add(6)">Increase Count</button> //method invocation with parameter
        <button @click="add(6, $event)">Increase Count</button> //method invocation with parameter & accessing event argument using $event special vaiable
        <button @click="(event) =>add(6, event)">Increase Count</button> //arrow function with parameter & event argument.

    # Method Handler Cases:
        <button @click="getUsers">Fetch Data</button> //method. method handler automatically receives the native DOM event object. i.e function getUsers(e){}. Note just use method name not with parenthesis. ()
        function getUsers(e){}
 
    # Modifier:
        - Event Modifiers
        - Key Modifiers
        - System Modifiers
        - Exact Modifiers
        - MOuse Button Modifiers

# Component event:
    - Event:
        - Event Listening: Event listening refers to the action of defining a method or function to be executed when a specific event occurs.
            > <ChildComponent @my-custom-event="handleCustomEvent" />
        - Event Triggering: Event triggering refers to the action of emitting or firing an event from a component. 
            > <button @click="emit('myCustomEvent', 'Event payload')">Press</button>

    - Custom events
    - Custom events use to communication between components
    - Custom events allow you to emit/fire/trigger an event from a child component and listen/register/define for that event in a parent component or any other component that has access to the child component.
    - Event triggering and event listening work together to establish a communication channel between components.
    - Event triggering occurs in the component where the event is emitted, while event listening takes place in the component that listens for and responds to the event.

    - Props, pass data from parent to child.
    - Emit custome event, pass data from child to parent.

    - Emit custome event, allow you to run method in parent from child.
    
    # Declaring EMitted Events using micro called defineEmits:
        > defineEMits()
            - return function equivalent to $emit() method.
            - declare inside top level of script tag.
        - syntax: array syntax
            - const emits = defineEmits(['myCustomeEvent'])
            
        - validation: object syntax
            - const emits = defineEmits({
                myCustomeEvent: validation_funtion
            })


    # Syntax_1: handler without parameter
    # Parent:
        > <Child @my-custome-event="myHandler">
    # Child:
        > <button @click=emit('myCustomeEvent')>Press</button>

    # Syntax_2:  handler with parameter
    # Parent:
        > <Child @my-custome-event="myHandlerNumb">
    # Child:
        > <button @click=emit('myCustomeEvent',66)>Press</button>

    # Syntax_3:  arrow method as a handler with parameter
    # Parent:
        > <Child @my-custome-event="n => count += n ">
    # Child:
        > <button @click=emit('myCustomeEvent',66)>Press</button>

    ---------------------------------------------------------------------

    # Syntax_1: using special method $emit to handle without parameter. no need to decalre emit
        # Parent:
            > <Child @my-custome-event="myHandler">
        # Child:
            > <button @click=$emit('myCustomeEvent')>Press</button>

-->