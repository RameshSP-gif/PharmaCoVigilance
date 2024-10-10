export default function Tailwind() {
    return (
      <div className="bg-secondary text-gray-800 min-h-screen">
        
        {/* Navbar */}
        <nav className="bg-primary p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <a href="#" className="font-bold text-lg">MyWebsite</a>
            <div>
              <a href="#" className="mr-4">Home</a>
              <a href="#" className="mr-4">About</a>
              <a href="#" className="mr-4">Services</a>
              <a href="#" className="mr-4">Contact</a>
            </div>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen bg-primary text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg mb-8">A simple website built with Tailwind CSS and Next.js</p>
            <a href="#" className="bg-white text-primary font-semibold py-2 px-6 rounded-full hover:bg-gray-100">Get Started</a>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="container mx-auto p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature One</h3>
              <p>Tailwind CSS makes styling easy by using utility-first classes for layout and design.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature Two</h3>
              <p>Customizing your website is simple with Tailwind's built-in configuration options.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Feature Three</h3>
              <p>Create responsive designs effortlessly with Tailwind's responsive modifiers.</p>
            </div>
            
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-primary text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
