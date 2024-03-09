import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Moreinfo = () => {
  return (
    <Layout>
      <h2>this is the more-information page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link to="/services">Back to services</Link>
    </Layout>
  );
};

export default Moreinfo;
