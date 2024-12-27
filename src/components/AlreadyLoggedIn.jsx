import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    const interval = async () => {
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    };
    interval();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Already Logged In</h1>
      <h1 style={{ textAlign: "center" }}>Redirecting to home page</h1>
    </>
  );
};
