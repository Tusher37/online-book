import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center mt-32">
            <div>
                <h1 className="text-work-sans-font text-9xl font-bold">404 </h1>
                <p className="text-work-sans-font text-5xl font-bold mr-8">Page not found..!!</p>
                <h1 className="text-work-sans-font text-9xl font-bold ml-20">:(</h1>
                <Link to="/"><button className="text-white bg-[#23BE0A] text-base font-normal px-3  p-2 rounded-lg mt-20">Go back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;