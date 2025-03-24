import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full text-white">
      {/* Call to Action Section */}
      <div className="relative flex flex-col items-center justify-center py-20">
        <div className="relative">
          <button className="start-project-button relative rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-300">
            Start Your Project
          </button>
          <style jsx>{`
            .start-project-button {
              border: 2px solid transparent;
              position: relative;
              overflow: hidden;
              animation: border-light 3s infinite linear;
            }

            .start-project-button::before {
              content: "";
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: linear-gradient(
                90deg,
                rgba(0, 255, 128, 0.8),
                rgba(0, 128, 255, 0.8),
                rgba(255, 0, 128, 0.8),
                rgba(0, 255, 128, 0.8)
              );
              border-radius: 50%;
              z-index: -1;
              animation: spin 3s linear infinite;
              filter: blur(4px);
            }

            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            @keyframes border-light {
              0% {
                border-color: rgba(0, 255, 128, 0.8);
              }
              50% {
                border-color: rgba(255, 0, 128, 0.8);
              }
              100% {
                border-color: rgba(0, 128, 255, 0.8);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="relative bg-cover bg-center py-12"
        style={{
          backgroundImage: `url('/assets/footerspace.png')`,
        }}
      >
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 text-sm md:grid-cols-3">
          {/* Get in Touch */}
          <div>
            <h5 className="mb-4 text-lg font-semibold">Get In Touch</h5>
            <p className="mb-2">
              <span className="font-bold">📞 +1 (909) 994-5730</span>
            </p>
            <div className="mb-4 flex space-x-4">
              <Link href="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
            <p>© Metaswap, LLC </p>
          </div>

          {/* Address */}
          <div>
            <h5 className="mb-4 text-lg font-semibold">Address</h5>
            <p>
              333 S Hope St
              <br />
              Los Anglees, CA 90071
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="mb-4 text-lg font-semibold">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative flex items-center justify-between px-6 py-6">
          <p className="text-xs text-gray-500">© Metaswap, LLC</p>
          <Link
            href="https://calendly.com/metaswapllc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full bg-green-500 px-4 py-2 text-black hover:bg-green-600"
          >
            <i className="fas fa-phone-alt"></i>
            <span>Book a Call</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
