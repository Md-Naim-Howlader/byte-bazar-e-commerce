import { useEffect } from "react";

const HelpSupport = () => {
  useEffect(() => {
    document.title = "Help & Support| ByteBazaar E-commerce";
  }, []);
  return (
    <section>
      <h1>Help & Support</h1>
    </section>
  );
};

export default HelpSupport;
