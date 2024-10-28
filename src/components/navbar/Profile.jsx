import { useState } from "react";
import momin from "../../assets/Mominul.jpg";

const Profile = () => {
  const [name, setName] = useState("Mominul");
  const [surname, setSurname] = useState("Islam");
  const [email, setEmail] = useState("pottoy.2017@gmail.com");

  return (
    // <div className="container mx-auto">
    //   <BookOwnerInfo owner={ownerInfo} />
    // </div>

    <div className="container mx-auto my-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-8">My Account</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Information */}
        <div className="flex flex-col items-center lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="w-24 h-24 bg-teal-200 rounded-full flex items-center justify-center text-gray-500 font-semibold text-sm mb-4">
            <img src={momin} alt="profile picture" />
          </div>
          <h2 className="text-xl font-semibold text-teal-700 mb-1">
            Mominul Islam
          </h2>
          <p className="text-gray-500 mb-4">There is no rating</p>
        </div>

        {/* Account Details */}
        <div className="lg:w-2/3 flex flex-col bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-500">Member since:</p>
              <p className="text-teal-600">2024-09-18</p>
            </div>
            <div>
              <p className="text-gray-500">Suggested books:</p>
              <p className="text-teal-600">0</p>
            </div>
            <div>
              <p className="text-gray-500">Books received:</p>
              <p className="text-teal-600">0</p>
            </div>
            <div>
              <p className="text-gray-500">Books sent:</p>
              <p className="text-teal-600">0</p>
            </div>
            <div>
              <p className="text-gray-500">Wanted books:</p>
              <p className="text-teal-600">4</p>
            </div>
          </div>

          {/* Editable Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-500">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div>
              <label className="text-gray-500">Surname</label>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-500">Email Post Office</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
