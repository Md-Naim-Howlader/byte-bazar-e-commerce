import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found!";
  });
  return (
    <section style={{ height: "80vh" }}>
      <h1>404: Page not found!</h1>
    </section>
  );
};

export default NotFound;
