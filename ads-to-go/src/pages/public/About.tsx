const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Ads to Go</h1>
          <p className="text-lg text-gray-600 mb-6">
            Ads to Go is a pioneering mobile advertising platform that connects businesses 
            with vehicle owners to create dynamic, moving advertisements throughout the city. 
            Our innovative approach transforms everyday vehicles into powerful advertising mediums, 
            creating a win-win situation for both advertisers and vehicle owners.
          </p>
          <p className="text-lg text-gray-600">
            Founded with the vision of revolutionizing outdoor advertising, we've built a 
            robust platform that supports various vehicle types and advertising formats, 
            ensuring maximum visibility and impact for our clients' campaigns.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create an efficient and effective mobile advertising ecosystem that 
              benefits both businesses and vehicle owners, while revolutionizing the 
              way brands connect with their audience in the physical world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-eye"></i>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading mobile advertising platform globally, known for 
              innovation, effectiveness, and creating valuable opportunities for both 
              advertisers and vehicle owners.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Register</h3>
              <p className="text-gray-600">
                Vehicle owners register their vehicles and businesses submit their 
                advertising requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Match</h3>
              <p className="text-gray-600">
                We match businesses with suitable vehicles based on routes, vehicle 
                types, and advertising needs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Track</h3>
              <p className="text-gray-600">
                Monitor campaign performance and earnings through our comprehensive 
                tracking system.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our services? We're here to help!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-blue-600 text-2xl mb-2">
                <i className="fas fa-envelope"></i>
              </div>
              <p className="text-gray-800">support@adstogo.com</p>
            </div>
            <div>
              <div className="text-blue-600 text-2xl mb-2">
                <i className="fas fa-phone"></i>
              </div>
              <p className="text-gray-800">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-blue-600 text-2xl mb-2">
                <i className="fas fa-location-dot"></i>
              </div>
              <p className="text-gray-800">123 Ad Street, Marketing City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
