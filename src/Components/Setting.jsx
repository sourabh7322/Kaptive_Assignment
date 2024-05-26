import { IoMdSettings } from "react-icons/io";

const Setting = () => {
  return (
    <div className="d-flex" style={{ color: "#89898B", cursor: "pointer" }}>
      <div className="justify-content-center align-items-center mx-1">
        <IoMdSettings />
      </div>
      <div className="justify-content-center align-items-center">
        <p>Setting</p>
      </div>
    </div>
  );
};

export default Setting;