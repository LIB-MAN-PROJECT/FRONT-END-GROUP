import PagesLayouts from "../layouts/PagesLayouts";
import ContactImg from "../assets/image.png";


const Contact = () => {
  return(
  <PagesLayouts>
<div className="grid grid-cols-2">
  <img src={ContactImg} 
className="object-contain h-screen px-10" />
<div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you!</p>
</div>
      
</div>
  </PagesLayouts>
    
 
  )
};

export default Contact;
