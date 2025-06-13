import ContactImg from "../assets/image.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import PagesLayouts2 from "../layouts/PagesLayouts2";

const Contact2 = () => {
  return (
    <PagesLayouts2>
      <div className="grid grid-cols-2">
        <img src={ContactImg} className="object-contain h-screen px-10" />

        <div className=" contact-two p-10">
          <p className="py-30 px-20 font-semibold text-2xl italic text-center ">
            Need Technical Help? Reach Out!
          </p>

          <div className="flex flex-row justify-around ">
            <FaSquareInstagram className="text-5xl hover:scale-110 transform" />
            <FaXTwitter className="text-5xl hover:scale-110 transform" />
            <FaFacebook className="text-5xl hover:scale-110 transform" />
            <MdOutlineEmail className="text-5xl hover:scale-110 transform" />
          </div>
          <div className="flex flex-row justify-around py-20 font-semibold ">
            <p>+233 234-567-8910</p>
            <p>+233 234-019-8765</p>
          </div>
        </div>
      </div>
    </PagesLayouts2>
  );
};

export default Contact2;
