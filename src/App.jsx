import React, { useState, useEffect} from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Zap, 
  Brain,
  Twitter,
  Sun,
  Moon,
  Send,
  ChevronDown
} from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBird, setShowBird] = useState(false);
  const [showTweet, setShowTweet] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [typewriterText, setTypewriterText] = useState('');

  // Console easter egg
  useEffect(() => {
    console.log(`
    🚀 Hey there, fellow developer! 
    
    Welcome to Talha's portfolio. I see you're checking under the hood!
    
    Tech Stack:
    • React with Hooks
    • Tailwind CSS
    • Lucide Icons
    • Pure JavaScript animations
    
    Fun fact: This entire site runs without any external animation libraries,
    just good old CSS transitions and JavaScript magic! 
    
    Want to collaborate? Let's build something amazing together!
    
    - Talha Ahsan
    `);
    
    setIsLoaded(true);
    
    // Generate floating keywords for TextInsight
    const keywordList = ['NLP', 'Analysis', 'Keywords', 'Insights', 'Feedback', 'Progress'];
    setKeywords(keywordList.map((word, i) => ({
      id: i,
      text: word,
      x: Math.random() * 300,
      y: Math.random() * 200,
      delay: i * 0.2
    })));
  }, []);
  
  // Typewriter effect
  useEffect(() => {
    const text = "Let's build something amazing together...";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypewriterText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'tech', 'contact'];
      //const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  const handleBirdClick = () => {
    setShowTweet(!showTweet);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      'service_tb11nle',
      'template_lgqg3h4',
      formData,
      '5FwIt8KZxo3WWfL5-'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Thanks for reaching out! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.error('Failed to send email. Please try again.');
    });
  };
  
  const techStack = [
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'TypeScript', icon: '💙', category: 'Language' },
    { name: 'Express.js', icon: '⚡', category: 'Framework' },
    { name: 'Django', icon: '🎸', category: 'Framework' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Socket.IO', icon: '🔌', category: 'Real-time' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' }
  ];
  
  return (
    <div className={`min-h-screen w-full transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} style={{width: '100vw', margin: 0, padding: 0, position: 'relative'}}>  
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Talha Ahsan
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {['About', 'Projects', 'Tech', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-blue-500 ${
                    activeSection === item.toLowerCase() ? 'text-blue-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className={`text-center z-10 px-6 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Hi, I'm Talha Ahsan
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-80">
              Backend Developer who codes logic into life
            </p>
            <div className={`inline-flex items-center space-x-4 px-6 py-3 rounded-full border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-300 bg-white/50'} backdrop-blur-md`}>
              <Code className="text-blue-500 animate-spin" size={20} />
              <span>AI • NLP • Real-time Systems</span>
              <Brain className="text-purple-500 animate-pulse" size={20} />
            </div>
          </div>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/TalhaAhsanSh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/talha82"  target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:talhaahsan164@gmail.com"  target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-500" />
          </button>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I'm a passionate backend developer with expertise in building scalable, efficient systems. 
                My journey in software development is driven by a fascination with AI, NLP, and real-time applications 
                that solve real-world problems.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                With hands-on experience in Express.js, TypeScript, and Django, I specialize in creating robust APIs, 
                implementing complex business logic, and integrating AI-powered solutions that make applications smarter 
                and more intuitive.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring the latest developments in machine learning, 
                contributing to open-source projects, or building automated solutions that make life easier.
              </p>
            </div>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6 text-center">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Database className="text-blue-500" size={24} />
                  <span>Backend Architecture & APIs</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Brain className="text-purple-500" size={24} />
                  <span>AI & NLP Integration</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Zap className="text-yellow-500" size={24} />
                  <span>Real-time Systems</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Code className="text-green-500" size={24} />
                  <span>Automation & DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Twitter Bot Project */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Twitter className="text-blue-400" size={32} />
                  <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Twitter Bot</h3>
                <p className="text-gray-400 mb-6">
                  Automated Twitter bot that generates engaging content using the Gemini API and posts about coding and cryptocurrency using the Twitter API.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Encore.ts</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Twitter API</span>
                </div>
                  <button
                    onClick={() => window.open("https://x.com/NullPointerKing", "_blank")}
                    onMouseEnter={() => setShowBird(true)}
                    onMouseLeave={() => setShowBird(false)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 font-semibold"
                  >
                    🐦 Bird on a Mission
                  </button>

              </div>
              
              {/* Flying Bird Animation */}
              {showBird && (
                <div className="absolute top-4 left-4 animate-bounce">
                  <span className="text-2xl">🐦</span>
                </div>
              )}
              
              {/* Tweet Preview */}
              {showTweet && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 z-20">
                  <div className="bg-white text-black p-4 rounded-lg max-w-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
                      <div>
                        <div className="font-bold">AI Bot</div>
                        <div className="text-sm text-gray-500">@talha_bot</div>
                      </div>
                    </div>
                    <p className="text-sm">
                      "Just deployed a new feature that uses NLP to analyze trending topics and generate relevant content. 
                      The future of automated content creation is here! 🚀 #AI #NLP #Automation"
                    </p>
                    <button
                      onClick={handleBirdClick}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* TextInsight Project */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Brain className="text-purple-500" size={32} />
                  <ExternalLink className="text-gray-400 hover:text-purple-400 cursor-pointer" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4">TextInsight</h3>
                <p className="text-gray-400 mb-6">
                  Advanced text analysis platform with keyword extraction, sentiment analysis, and automated feedback generation for educational content.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">ML</span>
                </div>
                  <button
                    onClick={() => window.open("https://dev.to/talhaahsan/trisum-a-hybrid-graph-based-keyword-extraction-algorithm-1p2c", "_blank")}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all duration-200 font-semibold"
                  >
                    🧠 Decode the Essayverse
                  </button>

                </div>
              
              {/* Floating Keywords Animation */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {keywords.map((keyword) => (
                  <div
                    key={keyword.id}
                    className="absolute text-purple-400 text-sm font-semibold animate-pulse"
                    style={{
                      left: `${keyword.x}px`,
                      top: `${keyword.y}px`,
                      animationDelay: `${keyword.delay}s`
                    }}
                  >
                    {keyword.text}
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold text-purple-500 animate-pulse">
                    INSIGHTS
                  </div>
                </div>
              </div>
            </div>
            
            {/* Evolvo AI Project */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden group`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="text-yellow-500" size={32} />
                  <ExternalLink className="text-gray-400 hover:text-yellow-400 cursor-pointer" size={20} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Evolvo AI</h3>
                <p className="text-gray-400 mb-6">
                  Cutting-edge AI platform that adapts and evolves its problem-solving approach based on real-time data and user interactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Andriod</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Real-time</span>
                </div>
                  <button
                    onClick={() => window.open("https://github.com/TalhaAhsanSh/EvolvoAI", "_blank")}
                    className="w-full py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-all duration-200 font-semibold"
                  >
                    🤖 Meet Evolvo
                  </button>

                </div>
              
              {/* Circuit Lines Animation */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="circuit" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  <path d="M20,20 L100,20 L100,60 L180,60" stroke="url(#circuit)" strokeWidth="2" fill="none" className="animate-pulse"/>
                  <path d="M20,80 L80,80 L80,120 L160,120" stroke="url(#circuit)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <path d="M200,40 L240,40 L240,100 L280,100" stroke="url(#circuit)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  <circle cx="100" cy="20" r="3" fill="#fbbf24" className="animate-ping"/>
                  <circle cx="180" cy="60" r="3" fill="#fbbf24" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                  <circle cx="160" cy="120" r="3" fill="#fbbf24" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section id="tech" className={`py-20 ${darkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-2 text-center group cursor-pointer`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {tech.icon}
                </div>
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Collaborate</h3>
              <p className="text-lg mb-8 leading-relaxed">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-500" size={24} />
                  <span>talhaahsan164@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="text-gray-500" size={24} />
                  <span>github.com/TalhaAhsanSh</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-blue-600" size={24} />
                  <span>linkedin.com/in/talha82</span>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full p-4 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                  />
                </div>
                <button
                  onClick={handleFormSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Talha Ahsan. Built with React & lots of ☕
          </p>
          <p className="text-sm text-gray-500 mt-2">
            “Backend so smooth, even the 500 errors feel intentional.” 
          </p>
        </div>
      </footer>

      {/* Toast Container - This was missing! */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        style={{
          fontSize: '14px'
        }}
      />
    </div>
  );
};

export default Portfolio;