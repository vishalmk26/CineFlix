import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Landing() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-dark">
        <div className="flex items-center justify-between px-8 md:px-16 py-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-netflix via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CineFlix
          </h1>
          <button
            onClick={() => navigate('/login')}
            className="bg-netflix px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        {/* Floating glass orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 glass rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 glass rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-netflix to-pink-600 px-8 py-4 rounded-lg text-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-2xl"
          >
            Get Started →
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Enjoy on your TV
              </h2>
              <p className="text-xl text-gray-400">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <div className="glass-dark p-8 rounded-2xl">
              <div className="text-6xl text-center">📺</div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-dark p-8 rounded-2xl order-2 md:order-1">
              <div className="text-6xl text-center">📱</div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Download your shows to watch offline
              </h2>
              <p className="text-xl text-gray-400">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Watch everywhere
              </h2>
              <p className="text-xl text-gray-400">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="glass-dark p-8 rounded-2xl">
              <div className="text-6xl text-center">🌍</div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-dark p-8 rounded-2xl order-2 md:order-1">
              <div className="text-6xl text-center">👨‍👩‍👧‍👦</div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Create profiles for kids
              </h2>
              <p className="text-xl text-gray-400">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              { q: 'What is CineFlix?', a: 'CineFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.' },
              { q: 'How much does CineFlix cost?', a: 'Watch CineFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.' },
              { q: 'Where can I watch?', a: 'Watch anywhere, anytime. Sign in with your CineFlix account to watch instantly on the web or on any internet-connected device.' },
              { q: 'What can I watch on CineFlix?', a: 'CineFlix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals, and more.' },
            ].map((faq, index) => (
              <details key={index} className="glass-dark p-6 rounded-lg cursor-pointer group">
                <summary className="text-xl font-semibold flex justify-between items-center">
                  {faq.q}
                  <span className="text-3xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-6 text-gray-400">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-netflix to-pink-600 px-8 py-4 rounded-lg text-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Get Started →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy</li>
                <li>Terms of Use</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-500">© 2024 CineFlix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
