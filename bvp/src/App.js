import "./App.css";
import banner from "./banner.png";
import { useState } from "react";
import axios from "axios";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    number: 3,
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    console.log(formData);

    try {
      const response = await axios.post("/submit", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response from server:", response.data);
      setSubmitted(true);
    } catch (error) {
      console.error("An error occurred while submitting the form", error);
    }
  };

  return (
    <div className="bg-bunting bg-fixed">
      <div className="py-24 semi-transparent">
        <div className="px-4 sm:px-0 mx-auto max-w-2xl text-center ">
          <div className="bg-white bg-opacity-70 p-6 m-4 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold tracking-tight text-deep-blue sm:text-4xl font-sans">
              BUENA VISTA BLOCK PARTY
            </h2>
            <h2 className="text-2xl font-bold tracking-tight text-orange sm:text-2xl font-sans">
              <br />
              SUNDAY, OCTOBER 22
            </h2>
            <h2 className="text-xl font-bold tracking-tight text-black sm:text-xl font-sans">
              12 PM - 5 PM
              <br />
              <br />
              DIVISADERO ST, BETWEEN DUBOCE AND 14TH
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
              A neighborhood celebration with music, tai chi, arts and crafts,
              potluck and more!
            </p>
            <br />
            <i>Joining us are:</i>
            <br />
            Mayor London Breed, Supervisor Rafael Mandelman, State Senator Scott
            Weiner, Assembly Member Matt Haney, SFPD Captain Jack Hart, and
            others.
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
            <a
              href="https://gofund.me/30dcf327"
              target="_blank"
              className="rounded-md bg-deep-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-deep-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Donate
            </a>
            <div className="text-left bg-white bg-opacity-50 p-6 m-4 rounded-lg shadow-md w-3/4">
              <h2 className="text-xl font-bold tracking-tight text-black sm:text-xl font-sans">
                Let us know you're coming!
              </h2>
              <p className="py-2">
                Provide your details so we can keep you up to date.
              </p>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <br />
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    E-Mail
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="you@domain.com"
                    />
                  </div>
                </div>
                <br />
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      id="address"
                      className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="1 Divisadero St"
                    />
                  </div>
                </div>
                <br />
                <div className="w-full">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Number of people
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      id="number"
                      className="block w-1/3 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="3"
                    />
                  </div>
                </div>
                <br />
                <div className="w-full">
                  <p className="text-lg font-medium leading-6 text-black">
                    <b>Able to contribute?</b>
                  </p>

                  <div className="w-full">
                    <label
                      htmlFor="comment"
                      className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                    >
                      Can you bring something for the potluck, provide
                      entertainment, sing, dance, play an instrument? Please let
                      us know and we'll be in touch!
                    </label>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        id="comment"
                        className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  {!submitted ? (
                    <>
                      <button
                        type="submit"
                        className="rounded-md bg-deep-blue px-3.5 py-2.5 mt-6 text-sm font-semibold text-white shadow-sm hover:bg-deep-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Submit
                      </button>
                    </>
                  ) : (
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
                      <b>Thank you! See you on Sunday!</b>
                    </p>
                  )}
                </div>
              </form>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
              Volunteer, contribute, or just say hello:
              <br />
              <a
                href="mailto:hi@buenavistaparty.com"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                hi@buenavistaparty.com
              </a>
            </p>
          </div>
        </div>
        <img src={banner} className="mx-auto mt-6 w-screen" />
      </div>
    </div>
  );
}

export default App;
