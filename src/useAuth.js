import axios from "axios";

const useAuth = async () => {
  try {
    const res = await axios.get("http://localhost:3000/users/check", {
      withCredentials: true,
    });
    console.log("hii");
    return res.data.data.user;
  } catch (error) {
    return null;
  }
};

export default useAuth;
