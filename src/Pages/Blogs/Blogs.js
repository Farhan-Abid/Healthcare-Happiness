import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h1>Difference between authorization and authentication</h1>
      <p>Authentication is the process of identifying users and validating who they claim to be. One of the most common and obvious factors to authenticate identity is a password. If the user name matches the password credential, it means the identity is valid, and the system grants access to the user.
        <br />
      Authorization happens after a user’s identity has been successfully authenticated. It is about offering full or partial access rights to resources like database, funds, and other critical information to get the job done.
      <br />
      Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.
      </p>
    </div>
  );
};

export default Blogs;
