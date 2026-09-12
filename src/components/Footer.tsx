export default function Footer() {
  return (
    <footer className="border-t border-base-200 mt-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="col-span-2 md:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}logo-text.png`}
              alt="Dev Stack"
              className="h-8"
            />
            <p className="mt-3 text-sm text-base-content/60">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-base-content/60">
              <a href="#" className="link link-hover">
                GitHub
              </a>
              <a href="#" className="link link-hover">
                Twitter
              </a>
              <a href="#" className="link link-hover">
                LinkedIn
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-sm font-bold uppercase text-base-content">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="link link-hover">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Projects
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-sm font-bold uppercase text-base-content">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="link link-hover">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Careers
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-sm font-bold uppercase text-base-content">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-base-content/60">
              <li>
                <a href="#" className="link link-hover">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-base-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-base-content/40">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-base-content/40">
            <a href="#" className="link link-hover">
              Privacy
            </a>
            <a href="#" className="link link-hover">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}