import React from "react";

function Contact() {
  return (
    <div className="container mx-auto mb-10" id="contact">
      <div className="text-center px-4 py-16 lg:py-24 ">
        <div className="heading">
          <h2 className="main">
            Contact <span className="second">Us</span>
          </h2>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:space-x-32 text-center lg:text-left lg:mb-6">
        <div className="  text-heading-color mb-6">
          <h3 className=" text-xl font-bold mb-2">Address</h3>
          <p>1200 W Washinton St,</p>
          <p>Indianapolis, IN 46222,,</p>
          <p>United States</p>
          <br />
          <h3 className=" text-xl font-bold my-2">Technical Support</h3>
          <p className=" max-w-[300px] mx-auto lg:mx-0">
            It is a long established fact that a reader will be distracted.
          </p>
          <p className=" cursor-pointer text-heading-yellow">
            example@example.com
          </p>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto self-center lg:mb-10">
          <form>
            <div className="grid grid-cols-2 gap-4 text-heading-color">
              <div className="form-group mb-6">
                <label htmlFor="exampleInput123">Name</label>
                <input
                  type="text"
                  className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-main-yellow rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-yellow focus:outline-main-yellow"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="Your name"
                ></input>
              </div>
              <div className="form-group mb-6">
                <label htmlFor="exampleInput124">Phone</label>
                <input
                  type="text"
                  className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-main-yellow rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-yellow focus:outline-main-yellow"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Your phone number"
                ></input>
              </div>
            </div>
            <div className="form-group mb-6">
              <label htmlFor="exampleInput125">Message</label>
              <textarea
                className=" mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-main-yellow rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-yellow focus:outline-main-yellow"
                id="exampleInput125"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="button"
              className="main-btn"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>

      <hr />
      <div className=" lg:flex lg:justify-center lg:gap-20 mt-16  text-center lg:text-left">
        <div className="mx-auto lg:mx-0 mb-5">
          <h3 className=" text-xl font-bold mb-2">Solutions</h3>
          <p className=" cursor-pointer hover:text-main-yellow">
            Industry News
          </p>
          <p className=" cursor-pointer hover:text-main-yellow">
            Projects in Development
          </p>
          <p className=" cursor-pointer hover:text-main-yellow">
            Completed Projects
          </p>
          <p className=" cursor-pointer hover:text-main-yellow">Facilities</p>
        </div>
        <div className=" mb-5">
          <h3 className=" text-xl font-bold mb-2">Company</h3>
          <p className=" cursor-pointer hover:text-main-yellow">Home</p>
          <p className=" cursor-pointer hover:text-main-yellow">About</p>
          <p className=" cursor-pointer hover:text-main-yellow">Services</p>
          <p className=" cursor-pointer hover:text-main-yellow">Contacts</p>
        </div>
        <div className=" mb-5">
          <h3 className=" text-xl font-bold mb-2">Legal</h3>
          <p className=" cursor-pointer hover:text-main-yellow">Claim</p>
          <p className=" cursor-pointer hover:text-main-yellow">Privacy</p>
          <p className=" cursor-pointer hover:text-main-yellow">Terms</p>
        </div>
        <form className=" mb-5">
          <h3 className=" text-xl font-bold mb-2">
            Subscribe To Our Newsletter
          </h3>

          <input
            type="text"
            placeholder="Your email address"
            className="mr-4 p-1.5 focus:outline-main-yellow"
          />
          <button
            type="button"
            className="main-btn"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
