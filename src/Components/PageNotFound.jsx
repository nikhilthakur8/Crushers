// import { ArrowLeft } from "lucide-react";
import Container from "./Container/Container";

export default function ErrorOne() {
  return (
    <Container>
    <div className="flex h-[70vh] items-center justify-center px-2 mx-5 md:px-0">
      <div>
        <p className="text-5xl font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        {/* <div className="mt-6 flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div> */}
      </div>
    </div>
    </Container>
  );
}
