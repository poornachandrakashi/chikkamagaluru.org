import React from "react";

function Footer() {
  return (
    <div className="footer">
       {/* fixed-bottom */}
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            &copy; {new Date().getFullYear()} Copyright : <a href="http://chikkamagaluru.org/"> chikkamagaluru.org </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;