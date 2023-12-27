/* eslint-disable react/no-unescaped-entities */
import Container from "../Container/Container";

function About() {
  return (
    <Container color="bg-teal-300">
      <div className="overflow-auto  md:w-4/5 min-h-[80vh] flex  flex-col font-serif md:mx-auto justify-center mx-4 my-4 items-center">
        <h1 className="md:text-6xl text-2xl mb-5 border-black border-b-2  pb-2 md:pb-3 px-5 font-bold">
          Crushers App
        </h1>
        <h1 className=" md:text-6xl font-semibold">
          Made with love❤️, right here in India
        </h1>
        <p className=" mt-5 text-sm md:text-xl">
          Introducing "Crushers," a dynamic and efficient app designed to
          revolutionize the way users access and compile detailed information
          about individuals. Crushers stands as a powerful tool for those
          seeking quick and accurate insights into the digital footprint of
          their contacts or connections. With its sleek interface and robust
          algorithms, Crushers ensures a seamless and reliable experience,
          making user information retrieval a breeze.
        </p>
        <p className="mt-5 text-sm md:text-xl">
          Crushers is more than just a name; it embodies the app's commitment to
          breaking down barriers in the search for user details. Whether you're
          looking for basic contact information, social media profiles, or other
          relevant data, Crushers is your go-to solution. The app's intuitive
          design and lightning-fast processing speed set it apart, providing
          users with a cutting-edge tool that simplifies the task of gathering
          comprehensive user information.
        </p>
        <p className="mt-5 text-sm md:text-xl">
          Privacy and security are paramount for Crushers, and users can trust
          the app to handle sensitive information responsibly. With Crushers,
          you can navigate the digital landscape with confidence, knowing that
          the app combines technological prowess with ethical considerations to
          deliver a seamless and secure user experience. Step into the future of
          user information retrieval with Crushers—an app that crushes the
          boundaries of convenience and reliability.
        </p>
      </div>
    </Container>
  );
}

export default About;
