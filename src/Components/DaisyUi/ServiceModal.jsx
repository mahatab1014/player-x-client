import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceModal = ({ data }) => {
  const { title, price } = data;
  const navigate = useNavigate()
  return (
    <>
      <dialog id="purchase" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box md:max-w-xl text-center">
          <ul className="steps">
            <li className="step text-sm md:text-base step-primary">Register</li>
            <li className="step text-sm md:text-base step-primary">
              Choose service
            </li>
            <li className="step text-sm md:text-base step-primary">Purchase</li>
            <li className="step text-sm md:text-base">Receive Product</li>
          </ul>
          <div className="pt-4 text-left">
            <h3 className="font-bold text-lg">Address</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="">
                <label className="block " htmlFor="name">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input input-sm input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="block" htmlFor="email">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-sm input-bordered w-full"
                />
              </div>

              <div className="">
                <label className="block" htmlFor="address">
                  Address :{" "}
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="input input-sm input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="block" htmlFor="st-address">
                  Street address :{" "}
                </label>
                <input
                  type="text"
                  name="st-address"
                  id="st-address"
                  className="input input-sm input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="block" htmlFor="postal-code">
                  ZIP Code :{" "}
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  className="input input-sm input-bordered w-full"
                />
              </div>
              <div className="">
                <label className="block" htmlFor="city">
                  City :{" "}
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="input input-sm input-bordered w-full"
                />
              </div>
              <div className="w-full">
                <label className="block" htmlFor="message">
                  Addition Message :{" "}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="20"
                  className="input input-bordered w-full"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button
                onClick={() => document.getElementById("last-step").showModal()}
                className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black  rounded-none leading-[1.1rem]"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="last-step" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box md:max-w-xl md:text-center">
          <ul className="steps">
            <li className="step text-sm md:text-base step-primary">Register</li>
            <li className="step text-sm md:text-base step-primary">
              Choose service
            </li>
            <li className="step text-sm md:text-base step-primary">Purchase</li>
            <li className="step text-sm md:text-base step-primary">
              Receive Product
            </li>
          </ul>
          <div className="pt-8">
            <div className="overflow-x-auto">
              <h4 className="text-left text-lg">Order Info :</h4>
              <table className="table mb-4">
                {/* head */}
                <thead>
                  <tr className="bg-base-200">
                    <th></th>
                    <th>Name</th>
                    <th>Paid/Unpaid</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>{title?.slice(0, 15)}...</td>
                    <td>Paid</td>
                    <td>${price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg font-light">
              Your purchase is complete, and we're thrilled to have you as our
              valued customer. If you have any questions or need assistance,
              feel free to reach out to our support team. Enjoy your new product
              and have a fantastic day!
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog" className="space-x-1">
              <button
                onClick={() => navigate("/")}
                className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black  rounded-none leading-[1.1rem]"
              >
                Go Home
              </button>
              <button className="btn btn-sm border-none bg-secondary hover:bg-secondary text-black hover:text-black  rounded-none leading-[1.1rem]">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ServiceModal;
