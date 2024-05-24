import axios from "axios";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Profile.css";

const baseUrl = process.env.REACT_APP_BASE_URL;
const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: "Loading...",
    email: "Loading...",
    phoneNumber: "Loading...",
    Image: { secure_url: "" },
  });

  const [staticData, setStaticData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/getUserData`, {
          headers: {
            "access-token": token,
          },
        });
        setStaticData(response.data.data);
        setUserData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  const onProfileUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access-token");

    // Image Upload
    const image = document.getElementById("profile-image").files[0];

    const updateImage = async () => {
      const formData = new FormData();
      formData.append("image", image);
      try {
        await axios.post(`${baseUrl}/user/uploadImage`, formData, {
          headers: {
            "access-token": token,
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (image) updateImage();

    // Profile Update
    const fullName = userData.fullName;
    const email = userData.email;

    const updateData = async () => {
      const formData = new FormData();

      if (fullName !== staticData.fullName)
        formData.append("fullName", fullName);

      if (email !== staticData.email) formData.append("email", email);

      if (userData.phoneNumber !== staticData.phoneNumber) {
        console.log(userData.phoneNumber, staticData.phoneNumber);
        formData.append("phoneNumber", userData.phoneNumber);
      }

      if (formData.entries().next().done === true) return;
      try {
        await axios.put(`${baseUrl}/user/update`, formData, {
          headers: {
            "access-token": token,
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) alert(error.response.data.message);
      }
    };

    updateData()
      .then(() => alert("Profile Updated Successfully"))
      .catch((e) => alert(e));
  };

  return (
    <Container>
      <form className="profile-container" onSubmit={onProfileUpdate}>
        <div className="profile-image">
          <img
            src={
              userData?.Image?.secure_url ||
              "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
            }
            alt="user-image"
          />
          <label htmlFor="profile-image">Select Image</label>
          <input
            type="file"
            name="profile-image"
            id="profile-image"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (e) => {
                document.querySelector("img").src = e.target.result;
              };
              reader.readAsDataURL(file);
              setUserData({
                ...userData,
                Image: { secure_url: e.target.value },
              });
            }}
          />
        </div>
        <div className="profile-info">
          <div className="input-container">
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              id="fullname"
              value={userData.fullName}
              onChange={(e) =>
                setUserData({ ...userData, fullName: e.target.value })
              }
            />
          </div>

          <div className="input-container">
            <label htmlFor="email" style={{ marginTop: "15px" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber" style={{ marginTop: "15px" }}>
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={userData.phoneNumber}
              onChange={(e) =>
                setUserData({ ...userData, phoneNumber: e.target.value })
              }
            />
          </div>
        </div>
        <button type="submit" className="profile-button">
          Update Profile
        </button>
      </form>
    </Container>
  );
};

export default Profile;
