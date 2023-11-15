import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-5 md:my-10 lg:my-16 grid md:grid-cols-2 gap-5'>

            <div className="border rounded-md p-4">
                <li className="text-2xl font-semibold text-[#474545]">What is Context API ?</li>
                <p className="font-medium text-lg text-[#474747] mb-7 mt-3">
                    <span className="text-[#7E90FE] underline text-lg font-medium">Context API :</span> It allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components. By using it we can avoid props drilling and can be time consuming.
                </p>
            </div>

            <div className="border rounded-md p-4">
                <li className="text-2xl text-[#474545] font-semibold">What is Custom hook ?</li>
                <p className="font-medium text-lg text-[#474747] mb-7 mt-3">
                    <span className="text-[#7E90FE] underline text-lg font-medium">Custom Hook :</span> A custom hook is a reuseable JavaScript function. It is very powerfull because that can help you to share logic to other componets. It makes code cleaner and it is time caver cause you don't need to write same code again you can reuse it.
                </p>
            </div>

            <div className="border rounded-md p-4">
                <li className="text-2xl text-[#474545] font-semibold">What is useRef ?</li>
                <p className="font-medium text-lg text-[#474747] mb-7 mt-3">
                    <span className="text-[#7E90FE] underline text-lg font-medium">useRef :</span> useRef is a built-in React hook that accepts one argument as the initial value and returns a single mutable object. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access DOM element directly.
                </p>
            </div>

            <div className="border rounded-md p-4">
                <li className="text-2xl text-[#474545] font-semibold">What is useMemo</li>
                <p className="font-medium text-lg text-[#474747] mb-7 mt-3">
                    <span className="text-[#7E90FE] underline text-lg font-medium">useMemo :</span> useMemo is React hook that lets you cache the result of a calculation between re-renders. It is a function that returns a memoized a value of passed in resource intensive function.
                </p>
            </div>
        </div>
    );
};

export default Blog;