import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    idNo: '',
    email: '',
    surname: '',
    otherNames: '',
    telephone: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing); 
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h1>
      <button
        className="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 transition duration-200"
        onClick={handleEditClick}
      >
        {isEditing ? 'Cancel' : 'Edit Details'}
      </button>

      {isEditing ? (
        <form className="mt-6">
          <table className="w-full">
            <tbody>
              {['idNo', 'email', 'surname', 'otherNames', 'telephone'].map((key) => (
                <tr key={key} className="border-b">
                  <td className="py-4 px-2 text-left">
                    <label className="block text-sm font-medium text-gray-700">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                    </label>
                  </td>
                  <td className="py-4 px-2">
                    <input
                      type="text"
                      name={key}
                      value={profile[key]}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="2" className="py-4 text-right">
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition duration-200"
                  >
                    Save Profile
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      ) : (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Details</h2>
          <table className="w-full">
            <tbody>
              {['idNo', 'email', 'surname', 'otherNames', 'telephone'].map((key) => (
                <tr key={key} className="border-b">
                  <td className="py-2 px-4 font-medium text-gray-700">
                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {profile[key] || 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Profile;
