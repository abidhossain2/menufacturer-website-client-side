import React from 'react';
import Menubar from '../Menubar/Menubar'
const Blogs = () => {
    return (
        <>
            <div className='bg-black'>
                <Menubar></Menubar>
            </div>
            <div>
                <h4>How will you improve the performance of a React Application?</h4>
                <p>We can drag out some points to improve React application: <br />
                    1. When we get data by props we should use only useful props. Because sometimes many unnecessary props are received by component. For improving the performance of react application we should avoid this first. <br />

                    2. We should make functional components to get props. It distributed props to other components. So react application works fast. <br />

                    3. We should avoid non-optimized images, iframes and some unnecessary packages.
                </p>

                <h4> What are the different ways to manage a state in a React application?</h4>
                <p>There are eight ways to manage a state in react apps.
                    1. URL,
                    2. Web storage,
                    3. Local state,
                    4. Lifted state,
                    5. Derived state,
                    6. Refs,
                    7. Context,
                    8.Third Party Library
                </p>

                <h4>How does prototypical inheritance work?</h4>
                <p>Inheritance in programming language is the acquisition of its properties and characteristics from one class to another class. Inheritance makes it much easier to create and save applications. Because with Inheritance, another class can be created on the basis of one class and again the same code can be used in many ways in many places, due to which functionality and application can be implemented quickly. When creating a new class, instead of writing a whole new data and function, programmers can tell the new class that the member data is already in another class and to inherit the data from there. This previous class is called Base Class or Super Class and the new Class is called Derived Class or Sub Class.</p>

                <h4>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>

                <p>When we declare a state it has two values. First is a initial value and second one is a function. In javascript we use [..] to copy element from an array. If we use setProducts its value can be an array or object or null or boolean or empty string. But in this " [...] " we can use some of them mentioned earlier.</p>

                <h4>What is a unit test? Why should write unit tests?</h4>
                <p>
                    1. It is a type of software testing. It tests each units or software components. It validates that each unit of code performs well. It can be a line of code, a method, or a class. <br />

                    2. It solves big bugs in a code. If we lauch any app without unit testing it can be danger because that time it takes enough time to solve this.
                    When you write any code with unit testing it is very helpful for developers to understand your function easily.  <br />

                    3. You can reuse your code easily. Because their is no bug found after testing. <br />

                    4. It improves the coverage of your code. <br />

                    5. It runs faster than integration and end-to-end. It returns feedback very quickly.
                </p>
            </div>
        </>
    );
};

export default Blogs;