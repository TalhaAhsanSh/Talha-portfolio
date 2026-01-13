import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Zap,
  Brain,
  Sun,
  Moon,
  Send,
  ChevronDown,
  Briefcase,
  Award,
  Terminal,
  Server,
  Workflow,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Globe,
  Cpu,
  Layers,
  Cloud,
  MapPin,
  Navigation,
  Flag
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [typewriterText, setTypewriterText] = useState('');
  const [roadProgress, setRoadProgress] = useState(0);
  const roadRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const texts = [
      "Building scalable backend systems...",
      "Architecting clean APIs...",
      "Integrating AI solutions...",
      "Optimizing performance...",
      "Let's build something amazing together!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = texts[textIndex];

      if (!isDeleting && charIndex < currentText.length) {
        setTypewriterText(currentText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        setTypewriterText(currentText.slice(0, charIndex - 1));
        charIndex--;
        setTimeout(type, 50);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; type(); }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
      }
    };

    type();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Road progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate road progress
      const progress = (window.scrollY / (documentHeight - windowHeight)) * 100;
      setRoadProgress(Math.min(progress, 100));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1500);
  };

  const techStack = [
    { name: 'TypeScript', icon: '💙', category: 'Language', level: 90 },
    { name: 'Node.js', icon: '🟢', category: 'Runtime', level: 95 },
    { name: 'Express.js', icon: '⚡', category: 'Framework', level: 95 },
    { name: 'NestJS', icon: '🐱', category: 'Framework', level: 85 },
    { name: 'Python', icon: '🐍', category: 'Language', level: 80 },
    { name: 'Django', icon: '🎸', category: 'Framework', level: 75 },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', level: 90 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', level: 90 },
    { name: 'Redis', icon: '🔴', category: 'Cache', level: 85 },
    { name: 'Docker', icon: '🐳', category: 'DevOps', level: 85 },
    { name: 'AWS', icon: '☁️', category: 'Cloud', level: 75 },
    { name: 'Terraform', icon: '🏗️', category: 'IaC', level: 70 }
  ];

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Fortex Solutions',
      period: 'April 2024 – Present',
      location: 'Lahore, Punjab',
      icon: <Server className="text-blue-500" size={24} />,
      achievements: [
        'Built scalable media processing pipelines for social apps with HLS streaming',
        'Architected clean backend structure (Controller-Service-Repository) improving code maintainability by 40%',
        'Implemented background workers with Redis for async task processing, reducing API response time by 60%',
        'Built e-commerce platform with Elasticsearch, Stripe, and third-party integrations serving 10K+ users',
        'Dockerized services and automated infrastructure with Terraform, reducing deployment time by 70%'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Fortex Solutions',
      period: 'August 2023 – October 2023',
      location: 'Lahore, Punjab',
      icon: <Code className="text-purple-500" size={24} />,
      achievements: [
        'Developed REST APIs using Express.js, MongoDB, and TypeScript',
        'Contributed to scalable backend architecture and database optimization',
        'Collaborated with senior engineers on production-grade systems'
      ]
    }
  ];

  const projects = [
    {
      name: 'TextInsight',
      icon: <Brain className="text-purple-500" size={28} />,
      description: 'NLP-powered essay analysis platform with automated feedback, keyword extraction, and progress tracking for students.',
      tech: ['Django', 'NLP', 'ML', 'TextRank', 'Transformers'],
      color: 'purple',
      link: 'https://dev.to/talhaahsan/trisum-a-hybrid-graph-based-keyword-extraction-algorithm-1p2c',
      features: ['Cosine Similarity', 'Sentence Transformers', 'Automated Feedback']
    },
    {
      name: 'CashLedger',
      icon: <Workflow className="text-green-500" size={28} />,
      description: 'Offline-first PWA for managing cash transactions with multi-user support, PDF generation, and real-time analytics.',
      tech: ['PWA', 'Offline-First', 'IndexedDB', 'PDF Generation'],
      color: 'green',
      link: 'https://cashflow-friend-pwa.vercel.app',
      features: ['Multi-user Tracking', 'PDF Statements', 'Analytics Dashboard']
    },
    {
      name: 'Gemini Twitter Bot',
      icon: <Zap className="text-blue-500" size={28} />,
      description: 'Automated Twitter bot using Gemini API for intelligent content generation and hourly posting with 30% improved efficiency.',
      tech: ['Node.js', 'Gemini API', 'Twitter API', 'Automation'],
      color: 'blue',
      link: 'https://x.com/NullPointerKing',
      features: ['AI Content Generation', 'Automated Posting', 'API Optimization']
    },
    {
      name: 'Inspection System',
      icon: <Cpu className="text-orange-500" size={28} />,
      description: 'Automated defect detection system for bottle production lines, reducing inspection errors by 15% with real-time monitoring.',
      tech: ['Computer Vision', 'Python', 'Real-time Processing'],
      color: 'orange',
      link: '#',
      features: ['Defect Detection', 'Production Line Integration', 'Error Reduction']
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-gray-900'
      }`}>
      {/* Roadmap Progress Bar - Fixed on left side */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="relative h-96">
          {/* Road Track */}
          <div className={`absolute left-1/2 -translate-x-1/2 w-1 h-full rounded-full ${darkMode ? 'bg-gray-800' : 'bg-orange-200'
            }`}>
            {/* Progress Line */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300"
              style={{ height: `${roadProgress}%` }}
            />
          </div>

          {/* Roadmap Milestones */}
          {['Hero', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((section, index) => {
            const isActive = activeSection === section.toLowerCase();
            const isPassed = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']
              .indexOf(activeSection) >= index;

            return (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 group ${isActive ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                style={{ top: `${(index / 5) * 100}%` }}
              >
                <div className={`relative w-4 h-4 rounded-full border-4 transition-all duration-300 ${isPassed
                    ? darkMode
                      ? 'bg-blue-500 border-gray-900'
                      : 'bg-blue-500 border-orange-50'
                    : darkMode
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-orange-200'
                  }`}>
                  {isActive && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-75" />
                  )}
                </div>

                {/* Tooltip */}
                <div className={`absolute left-8 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 shadow-lg'
                  }`}>
                  {section}
                </div>
              </button>
            );
          })}

          {/* Car Icon moving along the road */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{ top: `${roadProgress}%` }}
          >
            <Navigation className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} transform rotate-180`} size={20} />
          </div>
        </div>
      </div>

      {/* Cursor Follow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-20 transition-all duration-700"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode
          ? 'bg-gray-900/95 border-gray-800'
          : 'bg-white/95 border-orange-200'
        } backdrop-blur-xl border-b`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={24} />
            <span className={`font-bold text-xl ${darkMode
                ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent'
              }`}>
              Talha Ahsan
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative transition-colors duration-200 font-medium ${activeSection === item.toLowerCase()
                      ? darkMode ? 'text-blue-500' : 'text-orange-600'
                      : darkMode ? 'hover:text-blue-500' : 'hover:text-orange-600'
                    }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-orange-500'
                      }`}></span>
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all duration-200 ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-orange-100 hover:bg-orange-200'
                }`}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-orange-600" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${darkMode
              ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
              : 'bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10'
            }`}></div>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'bg-blue-400/10' : 'bg-orange-400/10'
                }`}
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className={`text-center z-10 px-6 max-w-5xl mx-auto transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border ${darkMode
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-white/70 border-orange-200 shadow-lg'
            }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className={darkMode
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent'
            }>
              Backend Developer
            </span>
          </h1>

          <div className="h-20 mb-8">
            <p className={`text-xl md:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {typewriterText}
              <span className="animate-pulse ml-1">|</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className={`flex items-center space-x-2 px-5 py-3 rounded-xl backdrop-blur-sm border ${darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white/70 border-orange-200 shadow-md'
              }`}>
              <Server className={darkMode ? 'text-blue-500' : 'text-orange-600'} size={20} />
              <span>Backend Architecture</span>
            </div>
            <div className={`flex items-center space-x-2 px-5 py-3 rounded-xl backdrop-blur-sm border ${darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white/70 border-orange-200 shadow-md'
              }`}>
              <Brain className={darkMode ? 'text-purple-500' : 'text-amber-600'} size={20} />
              <span>AI Integration</span>
            </div>
            <div className={`flex items-center space-x-2 px-5 py-3 rounded-xl backdrop-blur-sm border ${darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white/70 border-orange-200 shadow-md'
              }`}>
              <Cloud className={darkMode ? 'text-green-500' : 'text-yellow-600'} size={20} />
              <span>Cloud & DevOps</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/TalhaAhsanSh" target="_blank" rel="noopener noreferrer"
              className={`group p-4 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-orange-50 shadow-lg'
                }`}>
              <Github size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/talha82" target="_blank" rel="noopener noreferrer"
              className={`group p-4 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-500 hover:bg-blue-600 shadow-lg'
                }`}>
              <Linkedin size={24} className="text-white group-hover:rotate-12 transition-transform" />
            </a>
            <a href="mailto:talhaahsanshiekh723@gmail.com"
              className={`group p-4 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-red-600 hover:bg-red-500' : 'bg-red-500 hover:bg-red-600 shadow-lg'
                }`}>
              <Mail size={24} className="text-white group-hover:rotate-12 transition-transform" />
            </a>
            <a href="https://talha-portfolio-theta.vercel.app" target="_blank" rel="noopener noreferrer"
              className={`group p-4 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-purple-600 hover:bg-purple-500' : 'bg-purple-500 hover:bg-purple-600 shadow-lg'
                }`}>
              <Globe size={24} className="text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:animate-none"
          >
            <ChevronDown size={40} className={darkMode ? 'text-blue-500' : 'text-orange-500'} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-16">
            <MapPin className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={32} />
            <div className="flex-1 mx-8">
              <h2 className={`text-5xl font-bold ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
                }`}>
                About Me
              </h2>
            </div>
            <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-orange-500 to-transparent'
              }`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                I'm a <span className={`font-semibold ${darkMode ? 'text-blue-500' : 'text-orange-600'}`}>Backend Software Engineer</span> passionate about building robust, scalable systems that power exceptional user experiences. With expertise in <span className={`font-semibold ${darkMode ? 'text-purple-500' : 'text-amber-600'}`}>Node.js</span>, <span className={`font-semibold ${darkMode ? 'text-purple-500' : 'text-amber-600'}`}>TypeScript</span>, and modern backend architectures, I specialize in crafting APIs that are both performant and maintainable.
              </p>

              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Currently at <span className={`font-semibold ${darkMode ? 'text-blue-500' : 'text-orange-600'}`}>Fortex Solutions</span>, I've architected media processing pipelines, implemented clean architecture patterns, and built production-grade systems handling millions of requests. My approach combines technical excellence with pragmatic problem-solving.
              </p>

              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Beyond coding, I'm deeply interested in <span className={`font-semibold ${darkMode ? 'text-green-500' : 'text-yellow-600'}`}>AI/NLP integration</span>, <span className={`font-semibold ${darkMode ? 'text-green-500' : 'text-yellow-600'}`}>distributed systems</span>, and <span className={`font-semibold ${darkMode ? 'text-green-500' : 'text-yellow-600'}`}>DevOps automation</span>. I believe in writing code that not only works but tells a story of thoughtful engineering.
              </p>

              <div className="pt-4">
                <a href="#contact"
                  className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                    }`}>
                  <span>Let's Connect</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white/80 border-orange-200 shadow-xl'
                }`}>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className={darkMode ? 'text-yellow-500' : 'text-orange-500'} size={28} />
                  <span className="ml-3">Education</span>
                </h3>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Bachelor of Computer Science</p>
                  <p className={darkMode ? 'text-blue-500' : 'text-orange-600'}>University of Central Punjab</p>
                  <div className="flex justify-between items-center pt-2">
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>March 2021 – February 2025</p>
                    <div className={`px-4 py-1 rounded-full font-semibold ${darkMode
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-green-100 text-green-700'
                      }`}>
                      CGPA: 3.85/4.00
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white/80 border-orange-200 shadow-xl'
                }`}>
                <h3 className="text-2xl font-bold mb-6">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['RESTful APIs', 'Clean Architecture', 'System Design', 'Database Design', 'DevOps & CI/CD', 'Cloud Services', 'NLP Integration', 'Performance Optimization'].map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className={darkMode ? 'text-green-500' : 'text-green-600'} size={18} />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Enhanced Roadmap */}
      <section id="experience" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-16">
            <Briefcase className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={32} />
            <div className="flex-1 mx-8">
              <h2 className={`text-5xl font-bold ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
                }`}>
                Journey
              </h2>
            </div>
            <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-orange-500 to-transparent'
              }`}></div>
          </div>

          <div className="relative" ref={roadRef}>
            {/* Animated Road Line */}
            <div className="absolute left-0 md:left-12 top-0 bottom-0 w-1 hidden md:block">
              <div className={`w-full h-full ${darkMode ? 'bg-gray-800' : 'bg-orange-200'} rounded-full`}>
                {/* Animated gradient overlay */}
                <div className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50 animate-pulse"></div>
              </div>

              {/* Road markers */}
              {[0, 25, 50, 75, 100].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-orange-300'
                    }`}
                  style={{ top: `${pos}%` }}
                />
              ))}
            </div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-24 md:ml-24 group">
                {/* Mile Marker */}
                <div className={`absolute -left-12 top-6 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 transition-all duration-500 group-hover:scale-125 ${darkMode
                    ? 'bg-gray-900 border-blue-500 shadow-lg shadow-blue-500/50'
                    : 'bg-white border-orange-500 shadow-lg shadow-orange-500/50'
                  }`}>
                  <div className="group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>

                  {/* Ripple effect on hover */}
                  <div className={`absolute inset-0 rounded-full border-2 animate-ping opacity-0 group-hover:opacity-75 ${darkMode ? 'border-blue-500' : 'border-orange-500'
                    }`}></div>
                </div>

                {/* Sign Post */}
                <div className={`absolute -left-24 -top-8 hidden lg:flex items-center justify-center w-32 h-8 rounded-lg font-bold text-sm transform -rotate-12 transition-all duration-300 group-hover:rotate-0 ${darkMode
                    ? 'bg-blue-500/20 text-blue-400 border-2 border-blue-500'
                    : 'bg-orange-100 text-orange-700 border-2 border-orange-400'
                  }`}>
                  <Flag size={16} className="mr-2" />
                  Stop {index + 1}
                </div>

                <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl ${darkMode
                    ? 'bg-gray-800/50 border-gray-700 group-hover:border-blue-500'
                    : 'bg-white/80 border-orange-200 group-hover:border-orange-400 shadow-lg'
                  }`}>
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors ${darkMode ? 'group-hover:text-blue-500' : 'group-hover:text-orange-600'
                        }`}>
                        {exp.title}
                      </h3>
                      <p className={`text-xl mb-1 ${darkMode ? 'text-blue-500' : 'text-orange-600'}`}>{exp.company}</p>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.location}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full font-semibold ${darkMode
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-orange-100 text-orange-700'
                      }`}>
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className={`flex items-start space-x-3 transition-transform duration-300 group-hover:translate-x-2`}>
                        <ArrowRight className={`mt-1 flex-shrink-0 ${darkMode ? 'text-green-500' : 'text-green-600'}`} size={18} />
                        <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Journey End Marker */}
            <div className="relative md:ml-24">
              <div className={`absolute -left-12 top-0 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 ${darkMode
                  ? 'bg-gradient-to-br from-blue-500 to-purple-500 border-gray-900 shadow-lg shadow-purple-500/50'
                  : 'bg-gradient-to-br from-orange-500 to-amber-500 border-white shadow-lg shadow-orange-500/50'
                }`}>
                <Flag className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-16">
            <Layers className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={32} />
            <div className="flex-1 mx-8">
              <h2 className={`text-5xl font-bold ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
                }`}>
                Featured Projects
              </h2>
            </div>
            <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-orange-500 to-transparent'
              }`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden ${darkMode
                    ? `bg-gray-800/50 border-gray-700 hover:border-${project.color}-500`
                    : `bg-white/80 border-orange-200 hover:border-${project.color}-400 shadow-lg`
                  }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode
                    ? `bg-gradient-to-br from-${project.color}-500/5 to-transparent`
                    : `bg-gradient-to-br from-${project.color}-500/10 to-transparent`
                  }`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>{project.icon}</div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-100'
                        }`}>
                      <ExternalLink className={`transition-colors ${darkMode ? 'text-gray-400 group-hover:text-blue-500' : 'text-gray-600 group-hover:text-orange-600'
                        }`} size={20} />
                    </a>
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 transition-colors ${darkMode ? 'group-hover:text-blue-500' : 'group-hover:text-orange-600'
                    }`}>
                    {project.name}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{project.description}</p>

                  <div className="mb-6">
                    <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Key Features:</p>
                    <div className="space-y-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${project.color}-500`}></div>
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${darkMode
                          ? `bg-${project.color}-500/20 text-${project.color}-400`
                          : `bg-${project.color}-100 text-${project.color}-700`
                        }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-16">
            <TrendingUp className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={32} />
            <div className="flex-1 mx-8">
              <h2 className={`text-5xl font-bold ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
                }`}>
                Tech Stack
              </h2>
            </div>
            <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-orange-500 to-transparent'
              }`}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${darkMode
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500'
                    : 'bg-white/80 border-orange-200 hover:border-orange-400 shadow-lg'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{tech.name}</h3>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.category}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${darkMode ? 'text-blue-500' : 'text-orange-600'}`}>{tech.level}%</span>
                </div>

                <div className={`relative h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
                  <div
                    className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ${darkMode
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'bg-gradient-to-r from-orange-500 to-amber-500'
                      }`}
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 ${darkMode ? 'bg-gray-800/30' : 'bg-white/50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center mb-16">
            <Send className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={32} />
            <div className="flex-1 mx-8">
              <h2 className={`text-5xl font-bold ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'
                }`}>
                Get In Touch
              </h2>
            </div>
            <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-orange-500 to-transparent'
              }`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Build Something Amazing</h3>
              <p className={`text-lg mb-12 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Whether you have a project in mind, need technical consultation, or just want to connect —
                I'm always open to discussing new opportunities and innovative ideas.
              </p>

              <div className="space-y-6">
                <a href="mailto:talhaahsanshiekh723@gmail.com"
                  className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 group ${darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700'
                      : 'bg-white hover:bg-orange-50 border-orange-200 shadow-md'
                    }`}>
                  <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${darkMode ? 'bg-red-500/20' : 'bg-red-100'
                    }`}>
                    <Mail className="text-red-500" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                    <p className={`font-semibold transition-colors ${darkMode ? 'group-hover:text-blue-500' : 'group-hover:text-orange-600'
                      }`}>talhaahsanshiekh723@gmail.com</p>
                  </div>
                </a>

                <a href="https://github.com/TalhaAhsanSh" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 group ${darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700'
                      : 'bg-white hover:bg-orange-50 border-orange-200 shadow-md'
                    }`}>
                  <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${darkMode ? 'bg-gray-500/20' : 'bg-gray-100'
                    }`}>
                    <Github size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>GitHub</p>
                    <p className={`font-semibold transition-colors ${darkMode ? 'group-hover:text-blue-500' : 'group-hover:text-orange-600'
                      }`}>github.com/TalhaAhsanSh</p>
                  </div>
                </a>

                <a href="https://linkedin.com/in/talha82" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 group ${darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700'
                      : 'bg-white hover:bg-orange-50 border-orange-200 shadow-md'
                    }`}>
                  <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                    }`}>
                    <Linkedin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</p>
                    <p className={`font-semibold transition-colors ${darkMode ? 'group-hover:text-blue-500' : 'group-hover:text-orange-600'
                      }`}>linkedin.com/in/talha82</p>
                  </div>
                </a>

                <a href="https://talha-portfolio-theta.vercel.app" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 group ${darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800 border-gray-700'
                      : 'bg-white hover:bg-orange-50 border-orange-200 shadow-md'
                    }`}>
                  <div className={`p-3 rounded-lg group-hover:scale-110 transition-transform ${darkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                    }`}>
                    <Globe className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Portfolio</p>
                    <p className={`font-semibold transition-colors ${darkMode ? 'group-hover:text-blue-500' : 'group-hover:text-orange-600'
                      }`}>talha-portfolio-theta.vercel.app</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white/80 border-orange-200 shadow-xl'
              }`}>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={`w-full p-4 rounded-xl border transition-all duration-200 outline-none ${darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        : 'bg-orange-50 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                      }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={`w-full p-4 rounded-xl border transition-all duration-200 outline-none ${darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        : 'bg-orange-50 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                      }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className={`w-full p-4 rounded-xl border transition-all duration-200 outline-none resize-none ${darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                        : 'bg-orange-50 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
                      }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 ${darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className={`p-4 border rounded-xl text-center animate-pulse ${darkMode
                      ? 'bg-green-500/20 border-green-500 text-green-500'
                      : 'bg-green-100 border-green-500 text-green-700'
                    }`}>
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode
          ? 'border-gray-800 bg-gray-900/50'
          : 'border-orange-200 bg-white/50'
        }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Terminal className={darkMode ? 'text-blue-500' : 'text-orange-500'} size={24} />
              <span className={`font-bold text-xl ${darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent'
                }`}>
                Talha Ahsan
              </span>
            </div>

            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © 2025 Talha Ahsan. Crafted with React, TypeScript & passion ☕
            </p>

            <div className="flex items-center space-x-4">
              <a href="https://github.com/TalhaAhsanSh" target="_blank" rel="noopener noreferrer"
                className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-orange-600'
                  }`}>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/talha82" target="_blank" rel="noopener noreferrer"
                className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-orange-600'
                  }`}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:talhaahsanshiekh723@gmail.com"
                className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-orange-600'
                  }`}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t text-center ${darkMode ? 'border-gray-800' : 'border-orange-200'
            }`}>
            <p className={`text-sm italic ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              "Code is poetry written in logic, and every bug is just a plot twist waiting to be resolved."
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;