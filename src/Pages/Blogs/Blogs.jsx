import React, { useState } from "react";
import { FaDotCircle, FaExternalLinkSquareAlt } from "react-icons/fa";

const Blogs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="mx-auto md:my-32 w-96 md:w-[1290px]">
        <div className="chat chat-start mb-16 flex items-center gap-5">
          <>
            <p>
              <FaExternalLinkSquareAlt className="text-5xl text-slate-700" />
            </p>
            <p>
              <FaDotCircle className="text-5xl text-blue-500" />
            </p>
          </>
          <div className="chat-bubble chat-bubble-accent text-xl">
            <p className="text-3xl font-semibold p-2 mt-4">
              What is an access token and refresh token? <br /> How do they work
              and where should we store them on the client-side?
            </p>
            <hr className="border border-cyan-800 mt-2" />

            <p className="text-xl ml-8 mt-6 mb-8">
              <span className="font-semibold">1. Access Token:</span>
              <br />
              <span className="inline-block mt-2 ml-4">
                They are passed along with each request to the server, usually
                in the authorization header or as a query parameter.
              </span>
              <span className="inline-block mt-2 ml-4">
                It is used to authenticate and authorize requests to access
                protected resources on the server.
              </span>
              <span className="inline-block mt-2 ml-4">
                An access token is a short-lived credential that is issued to a
                client (such as a web or mobile application) after successful
                authentication..
              </span>
            </p>
            <p className="text-xl ml-8 mt-6 mb-8">
              <span className="font-semibold">2. A refresh token:</span>
              <br />
              <span className="inline-block mt-2 ml-4">
                On the other hand, is a long-lived credential that is used to
                obtain new access tokens without requiring the user to
                reauthenticate. When an access token expires, the refresh token
                can be used to request a new access token from the server,
                extending the user&apos;s session
              </span>
              <span className="inline-block mt-2 ml-4">
                A refresh token is a long-lived credential that is also issued
                to a client during authentication.
              </span>
              <span className="inline-block mt-2 ml-4">
                Refresh tokens typically have a longer expiration time than
                access tokens, allowing for prolonged sessions and better
                security.
              </span>
            </p>
            <p className="text-xl ml-8 mt-6 mb-8">
              <span className="font-semibold">
                How do they work and where should we store them on the
                client-side?
              </span>
              <br />
              <span className="inline-block mt-2 ml-4">
                The combination of an access token and refresh token provides a
                mechanism for managing user authentication and controlling
                access to protected resources. Access tokens provide short-term
                access while refresh tokens enable long-term access and token
                renewal without requiring repeated authentication.
              </span>
            </p>
          </div>
        </div>

        <div className="chat chat-start mb-16 flex items-center gap-5">
          <>
            <p>
              <FaExternalLinkSquareAlt className="text-5xl text-slate-700" />
            </p>
            <p>
              <FaDotCircle className="text-5xl text-blue-500" />
            </p>
          </>
          <div className="chat-bubble chat-bubble-accent text-xl">
            <p className="text-3xl font-semibold p-2 mt-4">
              Compare SQL and NoSQL databases?
            </p>
            <hr className="border border-cyan-800 mt-2" />

            <p className="text-xl ml-8 mt-6 mb-8">
              <span className="inline-block mt-2 ml-4">
                SQL and NoSQL databases differ in their data models, schemas,
                scalability, query languages, ACID compliance, and use cases.
                SQL databases are based on the relational model, have predefined
                schemas, and use SQL as a query language. They are suitable for
                structured data and complex relationships but have limitations
                on scalability. On the other hand, NoSQL databases offer
                flexible data models, can scale horizontally, and have their own
                query languages. They prioritize scalability and performance
                over strict consistency and are commonly used for handling
                large-scale data, high traffic loads, and applications with
                evolving data structure
              </span>
            </p>
          </div>
        </div>
        <div className="chat chat-start mb-16 flex items-center gap-5">
          <>
            <p>
              <FaExternalLinkSquareAlt className="text-5xl text-slate-700" />
            </p>
            <p>
              <FaDotCircle className="text-5xl text-blue-500" />
            </p>
          </>
          <div className="chat-bubble chat-bubble-accent text-xl">
            <p className="text-3xl font-semibold p-2 mt-4">
              What is express js? What is Nest JS?
            </p>
            <hr className="border border-cyan-800 mt-2" />

            <p className="text-xl ml-8 mt-6 mb-8">
              <span className="inline-block mt-2 ml-4">
                Express.js is a lightweight web application framework for
                Node.js, known for its simplicity and flexibility. It allows
                developers to build web applications and APIs by defining routes
                and handling HTTP requests and responses. NestJS, on the other
                hand, is a progressive TypeScript framework built on top of
                Express.js. It provides a higher-level structure and additional
                features like dependency injection, middleware support, and
                built-in authentication for developing scalable and maintainable
                server-side applications.{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="chat chat-start mb-16 flex items-center gap-5">
          <>
            <p>
              <FaExternalLinkSquareAlt className="text-5xl text-slate-700" />
            </p>
            <p>
              <FaDotCircle className="text-5xl text-blue-500" />
            </p>
          </>
          <div className="chat-bubble chat-bubble-accent text-xl">
            <p className="text-3xl font-semibold p-2 mt-4">
              What is MongoDB aggregate and how does it work?
            </p>
            <hr className="border border-cyan-800 mt-2" />

            <p className="text-xl ml-8 mt-6 mb-8">
              <span className="inline-block mt-2 ml-4">
                In MongoDB, the aggregate method is used to perform advanced
                data processing and analysis on the data stored in the database.
                It allows you to perform various operations like filtering,
                grouping, sorting, joining, and calculating aggregate values on
                collections of documents. The aggregate method works by applying
                a series of pipeline stages to the documents in a collection.
                Each stage performs a specific operation on the input documents
                and passes the results to the next stage. The stages are
                executed in order, forming a data processing pipeline.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
