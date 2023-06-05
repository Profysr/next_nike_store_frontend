import ContactForm from "@/components/contactForm";
import Iframe from "react-iframe";

const contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="capitalize font-semibold pt-10 text-center leading-tight text-xl md:text-[34px] mb-8">
        Contact Us
      </div>
      <div className="px-0 md:px-5 pb-24 mx-auto flex flex-wrap">
        {/* LEFT SIDE STARTS */}
        <div className="w-full bg-gray-300 rounded-lg overflow-hidden min-h-[420px] flex items-end justify-start relative">
          {/* MAP FRAME  */}
          <Iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.7278824252317!2d73.14652671038709!3d30.641625689925522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b6e4dde0c501%3A0xc37ea3d85326203!2sCOMSATS%20University%20Islamabad%20-%20Sahiwal%20Campus!5e0!3m2!1sen!2s!4v1685726422010!5m2!1sen!2s"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          />
          {/* JO DIV OPR DISPLAY HO RHAA HOGA JIS MEIN ADDRESS OR DOSRI INFO HOGI  */}
          <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-wrap py-6 rounded shadow-md max-w-[260px] ">
            <div className="px-5">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-sm">
                Comsats University Rd, off GT road،, Sahiwal, Sahiwal District,
                Punjab 57000, Pakistan
              </p>
            </div>
            <div className="px-5 mt-4">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        {/* LEFT SIDE ENDS  */}
        <ContactForm />
      </div>
    </section>
  );
};

export default contact;
