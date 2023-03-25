import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto mt-64'>
            <div className='border-solid border-2 border-sky-500 p-10'>
                <h1 className='text-2xl '><strong> Question-01:</strong>  What are the different ways to manage a state in a React application?</h1>
                <p> <strong>Answer:</strong> <br />

                    There are four main types of state you need to properly manage in your React apps: <br />

                    1.Local state <br />
                    2.Global state <br />
                    3.Server state <br />
                    4.URL state <br />
                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook. <br />
                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                </p>
            </div>

            <div className='border-solid border-2 border-sky-500 p-10  mt-5'>
                <h1 className='text-2xl'><strong> Question-02:</strong> 2 How does prototypical inheritance work?</h1>
                <p> <strong>Answer:</strong> <br />
                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.
                </p>
            </div>
            <div className='border-solid border-2 border-sky-500 p-10  mt-5'>
                <h1 className='text-2xl'><strong> Question-03:</strong>   What is a unit test? Why should we write unit tests?</h1>
                <p> <strong>Answer:</strong> <br />
                    Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. <br />
                    You can test units or functions of your project in isolation.
                    Unit tests act as documentation for your code.
                    They enable you to catch bugs early in the development process.
                    Automated unit tests help a great deal with regression testing.
                    They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    They contribute to higher code quality.

                </p>
            </div>

            <div className='border-solid border-2 border-sky-500 p-10 mt-5'>
                <h1 className='text-2xl'><strong> Question-04:</strong>  React vs. Angular vs. Vue?</h1>
                <p> <strong>Answer:</strong> <br />
                    Angular : <br />
                    Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:

                    “The modern web developer’s platform”

                    It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube. <br />
                    Vue : <br />
                    Vue.js is, according to its site:

                    “A progressive JavaScript framework”

                    Vue.js is developed and led by Evan You, but also it counts on a huge open-source community. <br />
                    React: <br />
                    React is considered a UI library. They define themselves as:

                    “A JavaScript library for building user interfaces”

                    Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                </p>
            </div>
        </div>
    );
};

export default Blog;