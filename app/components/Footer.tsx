import Image from "next/image";
import { brand } from "../data/brand";

export default function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <Image
            src={brand.logo.white}
            alt="YG Collective"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        <p className="footer-tagline">Young And Gifted — Always</p>

        <div className="footer-links flex gap-4 mt-4">
          <a
            href="https://instagram.com/yg.collective"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://wa.me/2347010302895"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </a>
          <a
            href="https://ygcollective.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} YG Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
