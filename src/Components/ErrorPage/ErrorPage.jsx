
const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
                <p className="text-2xl text-gray-700">Something went wrong.</p>
                <p className="text-lg text-gray-600 mt-4">The page you are looking for might be unavailable or you may have entered an incorrect URL.</p>
                <a href="/" className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
