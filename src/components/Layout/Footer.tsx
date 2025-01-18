import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-background">
      <div className="container px-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Address Section */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="text-sm text-muted-foreground">FL 33134 USA</p>
          </div>

          {/* Links Section */}
          <nav className="space-y-4">
            <h3 className="text-sm font-medium">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Help Section */}
          <nav className="space-y-4">
            <h3 className="text-sm font-medium">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  Returns
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </nav>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-3 py-2 text-sm placeholder:text-black text-black rounded-none border-b-2 border-black border-input"
                required
              />
              <Button 
            variant="ghost" 
            className='bg-white text-black border-b-2 rounded-none hover:bg-black hover:text-white border-black w-[121px] h-12'>
            SUBSCRIBE
          </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

