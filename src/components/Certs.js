import CertCard from "./CertCard.js"

// import hr from "../assets/curve-hr.svg"
import bc from "../assets/certs/bccert.webp"
import brandCert from "../assets/certs/brandCert.webp"
import figmaCert from "../assets/certs/figmaCert.webp"
import PMCert from "../assets/certs/PMCert.webp"
import UXCert from "../assets/certs/UXCert.webp"
import htmlCert from "../assets/certs/htmlCert-pdf.webp"
import adobeIllQS from "../assets/certs/AdobeIllCert-pdf.webp"
import css from "../assets/certs/cssgraphicsCert-pdf.webp"
import photoshop1 from "../assets/certs/photoshopcert-pdf.webp"
import photoshop2 from "../assets/certs/quickphotoshopCert-pdf.webp"



export default function Certs() {
    return (
        <div id="certs" className="mt-4 text-white" style={{ paddingBottom: "50px" }}>
            <h1 className="text-4xl font-bold flex items-center sm:justify-center">Certificates</h1>
            <p className="font-light text-gray-400 sm:text-center text-left ">Here are some of my Certificates I've earned</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Software Engineering Career Course" img={bc} issued="Boca Code School" date="Mar 2023" />
                <CertCard name="UX DesignOps: Managing Stakeholders" img={UXCert} issued="LinkedIn Learning" date="Apr 2023" />
                <CertCard name="Adobe Illustrator 2023" img={adobeIllQS} issued="LinkedIn Learning" date="June 2023" />
                <CertCard name="Photoshop 2021 Start" img={photoshop2} issued="LinkedIn Learning" date="June 2023" />
                <CertCard name="Photoshop Quick Tips" img={photoshop1} issued="LinkedIn Learning" date="June 2023" />
                <CertCard name="Figma Essential Training" img={figmaCert} issued="LinkedIn Learning" date="Apr 2023" />
                <CertCard name="Create a Brand Strategy" img={brandCert} issued="LinkedIn Learning" date="Mar 2023" />
                <CertCard name="Project Management Skills for Leaders" img={PMCert} issued="LinkedIn Learning" date="Apr 2023" />
                <CertCard name="CSS: Enhancing Website Graphics" img={css} issued="LinkedIn Learning" date="June 2023" />
                <CertCard name="HTML Essential Training" img={htmlCert} issued="LinkedIn Learning" date="June 2023" />









            </div>
            {/* <img src={hr} className="w-full mt-8 md:h-2" alt="hr" /> */}
        </div>
    )
}


