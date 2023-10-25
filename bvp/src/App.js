import "./App.css";
import banner from "./banner.png";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import axios from "axios";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const meetings = [
    {
      id: 1,
      name: "Music from DJ Rasheq",
      start: "12:00 PM",
      end: "12:45 PM",
    },
    {
      id: 2,
      name: "Music from local neighbor Al Hertz",
      start: "12:45 PM",
      end: "1:15 PM",
    },
    {
      id: 3,
      name: "Music from Emmy-winner Tony Saunders",
      start: "1:15 PM",
      end: "2:30 PM",
    },
    {
      id: 4,
      name: "Supervisor Rafael Mandelman",
      start: "2:30 PM",
      end: "2:45 PM",
    },
    {
      id: 5,
      name: "Tai Chi with Usha Gupta",
      start: "3:00 PM",
      end: "3:30 PM",
    },
    {
      id: 6,
      name: "Music from Max Baker and Randall Rattray",
      start: "3:30 PM",
      end: "4:30 PM",
    },
    {
      id: 7,
      name: "Open Talent Show",
      start: "4:30 PM",
      end: "5:00 PM",
    },
  ];

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
              SUNDAY, OCTOBER 22, 2023
            </h2>
            {/* <h2 className="text-xl font-bold tracking-tight text-black sm:text-xl font-sans">
              12 PM - 5 PM
              <br />
              <br />
              DIVISADERO ST, BETWEEN DUBOCE AND 14TH
            </h2> */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
              Dear Neighbors,
              <br />
              <br />
              Thanks again for coming to our 2023 Buena Vista Block Party. There
              were many fun highlights, and it was successful because the
              community came together despite the rain.
              <br />
              <br />
              Please check out the{" "}
              <a
                href="https://photos.app.goo.gl/Tr1gNPwxFe7dtihv8"
                target="_blank"
              >
                photos
              </a>{" "}
              (thank you, Girish!), make a donation if you like, and provide
              feedback on how we can make next year even better.
              <br />
              <br />
              In Community,
              <br />
              <br />
              Rasheq and the party planning committee
            </p>
            {/* <br />
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {meetings.map((meeting) => (
                <li
                  key={meeting.id}
                  className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
                >
                  <div className="flex-auto">
                    <p className="text-gray-900">{meeting.name}</p>
                    <p className="mt-0.5">
                      <time dateTime={meeting.startDatetime}>
                        {meeting.start}
                      </time>{" "}
                      -{" "}
                      <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                    </p>
                  </div>
                  <Menu
                    as="div"
                    className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
                  >
                    <div>
                      <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                      </Menu.Button>
                    </div>
                  </Menu>
                </li>
              ))}
            </ol>
            <br />
            <i>Joining us are:</i>
            <br />
            Mayor London Breed, City Attorney David Chiu, SFPD Captain Jack Hart
            with a fire truck, and many others. */}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
            <a
              href="https://photos.app.goo.gl/Tr1gNPwxFe7dtihv8"
              target="_blank"
              className="rounded-md bg-deep-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-deep-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Photos
            </a>
            <a
              href="https://gofund.me/30dcf327"
              target="_blank"
              className="rounded-md bg-deep-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-deep-blue-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Donate
            </a>
            <div className="text-left bg-white bg-opacity-50 p-6 m-4 rounded-lg shadow-md w-3/4">
              <h2 className="text-xl font-bold tracking-tight text-black sm:text-xl font-sans">
                Feedback
              </h2>
              <p className="py-2">How can we make next year even better?</p>
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
                {/* <br />
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
                </div> */}
                <br />
                <div className="w-full">
                  <p className="block text-sm font-medium leading-6 text-gray-900">
                    Suggestions
                  </p>

                  <div className="w-full">
                    {/* <label
                      htmlFor="comment"
                      className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                    >
                      Let us know what 
                    </label> */}
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
                      <b>Thank you!</b>
                    </p>
                  )}
                </div>
              </form>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
              Get in touch!
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
