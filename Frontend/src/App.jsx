import React, { useState } from 'react';
import { BookOpen, MessageCircle, Shield, CreditCard, Upload, Users, ChevronRight, Search, Star, Heart, UserPlus, ListPlus, ShoppingBag, MessageSquare } from 'lucide-react';

const LandingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStep, setActiveStep] = useState(0);
  
  
  const features = [
    { icon: Users, title: "User Authentication", desc: "Register/login via college emails", color: "bg-blue-500" },
    { icon: Upload, title: "Item Listings", desc: "Add, edit, delete listings easily", color: "bg-green-500" },
    { icon: CreditCard, title: "Secure Payments", desc: "Integrated with Razorpay for safe transactions", color: "bg-purple-500" },
    { icon: MessageCircle, title: "Real-time Chat", desc: "Connect with buyers and sellers instantly", color: "bg-yellow-500" },
    { icon: Shield, title: "Admin Panel", desc: "Efficient management of users and listings", color: "bg-red-500" },
    { icon: Upload, title: "Cloud Image Uploads", desc: "Easy image uploads with Cloudinary", color: "bg-indigo-500" }
  ];

  const categories = [
    { name: 'All', count: 2450 },
    { name: 'Textbooks', count: 856 },
    { name: 'Electronics', count: 643 },
    { name: 'Notes', count: 421 },
    { name: 'Gadgets', count: 530 }
  ];

  const featuredItems = [
    { title: "Data Structures Textbook", price: "₹499", category: "Textbooks", rating: 4.5, likes: 24 },
    { title: "iPad Air 2020", price: "₹35,000", category: "Electronics", rating: 4.8, likes: 45 },
    { title: "Machine Learning Notes", price: "₹299", category: "Notes", rating: 4.2, likes: 18 }
  ];

  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your account using your college email ID for verified access to your campus marketplace.",
      color: "bg-blue-500",
      detail: "Get started in less than 2 minutes"
    },
    {
      icon: ListPlus,
      title: "List Items",
      description: "Upload items you want to sell with photos, descriptions, and set your price. It's quick and easy!",
      color: "bg-green-500",
      detail: "Free listings, no commission"
    },
    {
      icon: ShoppingBag,
      title: "Browse & Buy",
      description: "Explore available items from your campus community. Find great deals on books, gadgets, and more.",
      color: "bg-purple-500",
      detail: "Safe and secure transactions"
    },
    {
      icon: MessageSquare,
      title: "Connect & Trade",
      description: "Chat with sellers, negotiate prices, and complete your transaction safely within the platform.",
      color: "bg-yellow-500",
      detail: "Real-time messaging"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <span className="text-sm font-medium">🎉 Now live in 50+ colleges!</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Your Campus <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                Marketplace
              </span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Connect, trade, and save money within your college community. Buy and sell everything from textbooks to tech.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white/50 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="What are you looking for?"
                className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === cat.name 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Platform Features</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to buy, sell, and trade within your campus community
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <a href="#" className="text-blue-500 font-medium group-hover:text-blue-600 flex items-center">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Items</h2>
          <p className="text-gray-600 text-center mb-16">Recently listed items from your campus</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border hover:shadow-xl transition-all p-4">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 relative overflow-hidden group">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                  </div>
                  <p className="font-bold text-lg">{item.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Get started with CampusTrade in four simple steps
          </p>
          
          {/* Steps Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${step.color} bg-opacity-10 mb-4`}>
                      <step.icon className={`w-5 h-5 ${step.color.replace('bg-', 'text-')}`} />
                      <span className={`text-sm font-medium ${step.color.replace('bg-', 'text-')}`}>{step.detail}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Center Circle */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center ${
                      activeStep === index ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute inset-0 ${step.color} rounded-full opacity-20 animate-ping`}></div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Partner Colleges" },
              { number: "10,000+", label: "Active Users" },
              { number: "25,000+", label: "Items Listed" },
              { number: "₹15L+", label: "Money Saved" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-xl mb-8 text-gray-300">Join thousands of students saving money every day</p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">CampusTrade</h3>
              <p className="text-gray-400">Your trusted campus marketplace</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">support@campustrade.com</a></li>
                <li>Follow us on social media</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusTrade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;