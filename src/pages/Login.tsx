import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        await signup(email, password, name);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (error) {
      alert('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black/60 to-netflix/40" />
      
      {/* Floating glass orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 glass rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 glass rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="glass-dark p-12 rounded-2xl shadow-2xl border border-white/20">
          {/* Logo inside card */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-netflix via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CineFlix
            </h1>
            <p className="text-gray-400 mt-2">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:outline-none focus:border-netflix focus:ring-2 focus:ring-netflix/50 transition placeholder-gray-400"
                />
              </div>
            )}
            
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:outline-none focus:border-netflix focus:ring-2 focus:ring-netflix/50 transition placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:outline-none focus:border-netflix focus:ring-2 focus:ring-netflix/50 transition placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-netflix to-pink-600 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Loading...
                </span>
              ) : (
                isSignUp ? 'Sign Up' : 'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="glass px-4 py-3 rounded-lg inline-block">
              <span className="text-gray-400">
                {isSignUp ? 'Already have an account?' : 'New to CineFlix?'}
              </span>{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-netflix hover:text-pink-500 font-semibold transition"
              >
                {isSignUp ? 'Sign in now' : 'Sign up now'}
              </button>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 text-center text-gray-400 text-sm glass-dark px-6 py-4 rounded-lg">
          <p>Unlimited movies, TV shows, and more</p>
        </div>
      </div>

      {/* Top logo */}
      <div className="absolute top-8 left-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-netflix via-purple-500 to-pink-500 bg-clip-text text-transparent">
          CineFlix
        </h1>
      </div>
    </div>
  );
}
