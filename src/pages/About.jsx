import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | ByteBazaar E-commerce";
  }, []);
  return (
    <section>
      <h1>About Us</h1>
    </section>
  );
};

export default About;
