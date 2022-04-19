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
      <br />
      <h1>Why am i using firebase? What other options do i have to implement authentication?</h1>
      <p>I used firebase in this web app because it can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As a web developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc.
      Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development. I have been using it in my websites in production. You will not have to take care of servers, etc, Google will take care of it for you.
      <br />
      There are several applications to implement authentication other than firebase:
      <ul>
        <li>Microsoft</li>
        <li>Okta</li>
        <li>One Identity (OneLogin)</li>
        <li>Ping Identity</li>
        <li>IBM</li>
        <li>RSA</li>
        <li>SecureAuth</li>
        </ul></p>
        <br />
        <h1>What other services does firebase provide other than authentication?</h1>
        <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.
        <br/>
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
          
        </ul>
        </p>
    </div>
  );
};

export default Blogs;
