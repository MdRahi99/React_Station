import React from "react";
import useTitle from "../../Hooks/useTitle";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Contact = () => {
  useTitle("Contact");
  const {user} = useContext(AuthContext);

  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const subject = form.subject.value;
    const message = form.message.value;

    const userMessage = { subject, message };

    fetch("http://localhost:5000/feedbacks", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        const newFeedback = [...feedbacks, data];
        setFeedbacks(newFeedback);
      })
      .catch((error) => console.error(error));

    form.reset();
  };

  return (
    <div className="bg-slate-200 my-12 lg:p-10 p-4 mx-4 lg:w-1/2 lg:mx-auto">
      <h1 className="text-3xl font-serif text-center">Contact Us</h1>
      <div className="flex-grow border-t border-slate-600 mt-3 mb-9 w-2/4 mx-auto"></div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto shadow-lg shadow-cyan-600 p-4"
      >
        <div>
          <div className="mb-2 block font-serif">
            <h5>Name</h5>
          </div>
          <input
            type="text"
            name="name"
            defaultValue={user.displayName}
            disabled
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>

        <div>
          <div className="mb-2 block font-serif">
            <h5>Email</h5>
          </div>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            disabled
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>

        <div>
          <div className="mb-2 block font-serif">
            <h5>Subject</h5>
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            className="input input-bordered input-info w-full max-w-lg"
          />
        </div>

        <div>
          <div className="mb-2 block font-serif">
            <h5>Message</h5>
          </div>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            className="textarea textarea-info font-serif w-full"
          />
        </div>

        <button
          className="p-2 shadow-sm text-xl font-serif hover:bg-cyan-600 hover:text-white shadow-cyan-600 bg-white"
          type="submit"
        >
          Submit
        </button>
      </form>

      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="my-12 bg-cyan-200 p-10">
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
          <h1>{feedback.subject}</h1>
          <h1>{feedback.message}</h1>
        </div>
      ))}

    </div>
  );
};

export default Contact;
