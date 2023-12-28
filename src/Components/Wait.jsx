import Container from "./Container/Container";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Wait() {
  const userData = useSelector((state) => state.userData);
  return !userData ? (
    <Navigate to="/login" />
  ) : (
    <Container>
      <div className="w-[95%] m-2  md:w-4/6 relative md:mx-auto my-10 flex justify-center flex-col items-center bg-gray-400 p-6 rounded-xl min-h-[80vh]">
        <div className="-mt-20">
          <h1 className="md:text-4xl text-3xl font-semibold">
            Hey {userData.name} 👋👋
          </h1>
          <p
            className="
					text-xl my-2  
				"
          >
            We have received your request.
          </p>
          <p
            className="
				text-xl my-2 
			"
          >
            Please wait for 24 Hours.
          </p>
          <div className=" text-md">
            <h1>Your Details: </h1>
            <h1>User Id: {userData?.$id}</h1>
            <h1>Full Name: {userData?.name}</h1>
            <h1>Email: {userData?.email}</h1>
            <h1>
              Account Status:{" "}
              {userData?.prefs.status ? (
                <p className="text-red-700 inline">{userData?.prefs.status}</p>
              ) : (
                <p className="text-green-700 font-bold text-lg inline">
                  In process(Wait...)
                </p>
              )}
            </h1>
            <h1>
              Message:{" "}
              {userData?.prefs.message ? (
                <p className="text-red-700 inline">{userData?.prefs.message}</p>
              ) : (
                <p className="font-bold inline">No Message</p>
              )}
            </h1>
          </div>

          <div className="absolute w-60 md:w-auto bottom-10 font-semibold">
            If your Account Status showing banned then mail{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:cristianorolando696.com"
            >
              {" "}
              here
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Wait;
