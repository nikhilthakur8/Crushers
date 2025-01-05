/* eslint-disable react/no-unescaped-entities */
import Container from "../Container/Container";

function About() {
  document.title = `About - Crushers`;
  return (
    <Container color="bg-black/[0.96] bg-grid-white/[0.02] text-slate-300">
      <div className="overflow-auto  md:w-4/5 min-h-[80vh] flex  flex-col font-serif md:mx-auto justify-center mx-4 my-4 items-center">
        <h1 className="md:text-5xl text-2xl mb-5 border-black border-b-2  pb-2 md:pb-3 px-5 font-bold">
          Crushers App
        </h1>
        <h1 className=" md:text-4xl font-semibold">
          Made with love❤️, right here in India
        </h1>
        <p className=" mt-5 text-sm md:text-xl">
          
        </p>
      </div>
    </Container>
  );
}

export default About;
