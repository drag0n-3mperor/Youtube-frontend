import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      const selectedFile = files[0];
      setFormData({
        ...formData,
        [id]: selectedFile,
      });
      return;
    }

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      let res = await axios.post(
        "http://localhost:3000/users/login",
        formData,
        {
          withCredentials: true,
        },
      );
      res = res.data.data.user;
      navigate("/home");
      const { username, fullname, email, updatedAt, watchHistory } = res;
      setuser([username, fullname, email, updatedAt, watchHistory]);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-center mt-40">
        <div className="flex flex-col justify-center gap-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border border-gray-500 rounded-md"
          >
            <div className="flex justify-evenly gap-8 p-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <label htmlFor="password">Password</label>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="border border-black"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  className="border border-black"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              value="Sumbit"
              className="border border-black rounded-sm bg-gray-200 w-fit py-1 px-4 mb-4 cursor-pointer"
              style={{ alignSelf: "center" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
