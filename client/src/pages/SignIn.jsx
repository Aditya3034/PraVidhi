import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/farmer-homepage");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="pt-24 bg-white ">
      <div className=" min-h-screen max-w-5xl  mx-auto ">
        
          <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex max-w-xl mx-auto  flex-col gap-4">
            <input
              type="email"
              placeholder="email"
              className="border p-3 rounded-lg"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="border p-3 rounded-lg"
              id="password"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
            <OAuth />
          <div className="flex gap-2 mt-5 justify-center">
            <p>Dont have an account?</p>
            <Link to={"/sign-up"}>
              <span className="text-blue-700">Sign up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
          </form>
        
        {/* <div className=" bg-gradient-to-r from-[#4c42f0] to-[#3e5ff9]  -z-0">
          <div className="  relative">
          <div className=" w-[80%] bg-white bg-opacity-40 flex flex-col gap-4 pt-8 text-white text-4xl  border border-white rounded-3xl  absolute top-[25%] left-[10%] ">
            <h1>Your Gateway to Smart Farming Solutions</h1>
            <img
              src="https://s3-alpha-sig.figma.com/img/2302/edcc/402bd0ca44ba9eebe6ba4ec1a387788f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nLdgmmiA7mWrhj4~CtBi~~Zk1F9cgSUpBVEJVuFBEhu9kOyiGxvCDdxUbkcXcqYdtd989mQD-gSuu~ASN06USMVdNfR2Auf~C1ab4J2UAGH05NZiKbn1t-oy7z9nso0BrNOEhH8iQcyNF8n8fjhvcx974rB8aKkVX18kzoJ4nJz0AobJ7bFJnWVsOdxnhPXF814dMV6JlVwCzQiv~RZzlJ9FYfDdAFQmPaUQQFwsGqQY9aQAz3Dvlq5tJCnf4dVQMPv4Y5obqIRX3rJ-g6e9s~fevNeRwW~eGrZUqWMYjcy7WmOd~lYLDl8166af~2tStdLoYKBRdvF33EpbQn4L8A__"
              alt=""
              className=" w-full h-96"
            />
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a57f/b6f5/d09df55185bc4fee2167b90f10d18288?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fXEoVs3M72w6kCR1T0S7SaH69L6TC-yJ0S3i46lbUsxonxLUaBRWBWbKPwotrvvOohDUFHOlYPwlBc9Ljx4ouxxRV~B92qnRuwc2DctO7JrT6-rCDM4sCyxo0VYPld5BhBJRxitsxgCfKfzt1NPbvy1Vdo~fyxcc1OZM1CfvYsqHMm2176q26SjfaRYCtgM55vhtqFft76JrVrSou0~z64T6322dwRX6trFDX3tOzsz~Wawj6EtiNbHI8va7maflpwABjDcdJ7eHDzL5ddrggUkvakuq77q4qBSn2akF~oEMRnWw3uJZ7PUiTF-uui1xVETs-CP7Hc8DSVdbEkC18w__"
            alt=""
            className=" w-full"
          />
          </div>
        </div> */}
      </div>
    </div>
  );
}
