<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen - Creative Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #fff;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            z-index: 1000;
            padding: 20px 0;
            transition: all 0.3s ease;
        }

        nav.scrolled {
            background: rgba(0, 0, 0, 0.9);
            padding: 15px 0;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 40px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
            transition: width 0.3s ease;
        }

        nav a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.1)" points="0,0 1000,300 1000,1000 0,700"/></svg>');
            animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        /* About Section */
        .about {
            padding: 100px 0;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: #fff;
        }

        .about-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .skills {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }

        .skill {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .skill:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.2);
        }

        .skill-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        /* Portfolio Section */
        .portfolio {
            padding: 100px 0;
        }

        .portfolio h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 60px;
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }

        .portfolio-item {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(20px);
            position: relative;
        }

        .portfolio-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .portfolio-image {
            height: 200px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .portfolio-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }

        .portfolio-item:hover .portfolio-image::before {
            background: rgba(0, 0, 0, 0.1);
        }

        .portfolio-content {
            padding: 30px;
        }

        .portfolio-content h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        .portfolio-content p {
            opacity: 0.8;
            margin-bottom: 20px;
        }

        .portfolio-tech {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tech-tag {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        /* Contact Section */
        .contact {
            padding: 100px 0;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
        }

        .contact h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 60px;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            transform: translateX(10px);
            background: rgba(255, 255, 255, 0.2);
        }

        .contact-icon {
            font-size: 1.5rem;
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .contact-form {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(20px);
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        .submit-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 40px 0;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(20px);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        }

        .social-links a {
            width: 50px;
            height: 50px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .portfolio-grid {
                grid-template-columns: 1fr;
            }

            nav ul {
                gap: 20px;
            }

            .skills {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* Scroll animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Particles */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float-particle 20s infinite linear;
        }

        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="particles" id="particles"></div>

    <nav id="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Alex Chen</h1>
            <p>Creative Developer & Designer</p>
            <a href="#portfolio" class="cta-button">View My Work</a>
        </div>
    </section>

    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text fade-in">
                    <h2>About Me</h2>
                    <p>I'm a passionate creative developer with 5+ years of experience in crafting digital experiences that blend beautiful design with cutting-edge technology.</p>
                    <p>My expertise spans across web development, UI/UX design, and interactive media. I love turning complex ideas into elegant, user-friendly solutions.</p>
                    <div class="skills">
                        <div class="skill">
                            <div class="skill-icon">🎨</div>
                            <div>Design</div>
                        </div>
                        <div class="skill">
                            <div class="skill-icon">💻</div>
                            <div>Development</div>
                        </div>
                        <div class="skill">
                            <div class="skill-icon">📱</div>
                            <div>Mobile</div>
                        </div>
                        <div class="skill">
                            <div class="skill-icon">🚀</div>
                            <div>Innovation</div>
                        </div>
                    </div>
                </div>
                <div class="about-image fade-in">
                    <div style="width: 300px; height: 300px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 4rem;">👨‍💻</div>
                </div>
            </div>
        </div>
    </section>

    <section class="portfolio" id="portfolio">
        <div class="container">
            <h2 class="fade-in">My Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item fade-in">
                    <div class="portfolio-image">🌐</div>
                    <div class="portfolio-content">
                        <h3>E-Commerce Platform</h3>
                        <p>Modern e-commerce solution with advanced filtering and seamless checkout experience.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item fade-in">
                    <div class="portfolio-image">📱</div>
                    <div class="portfolio-content">
                        <h3>Mobile App Design</h3>
                        <p>Intuitive mobile application with focus on user experience and accessibility.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Redux</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item fade-in">
                    <div class="portfolio-image">🎮</div>
                    <div class="portfolio-content">
                        <h3>Interactive Game</h3>
                        <p>Browser-based game with engaging mechanics and beautiful animations.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">WebGL</span>
                            <span class="tech-tag">Three.js</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item fade-in">
                    <div class="portfolio-image">📊</div>
                    <div class="portfolio-content">
                        <h3>Data Visualization</h3>
                        <p>Interactive dashboard for complex data analysis and reporting.</p>
                        <div class="portfolio-tech">
                            <span class="tech-tag">D3.js</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">SQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact" id="contact">
        <div class="container">
            <h2 class="fade-in">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info fade-in">
                    <div class="contact-item">
                        <div class="contact-icon">📧</div>
                        <div>
                            <h3>Email</h3>
                            <p>alex.chen@example.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📱</div>
                        <div>
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div>
                            <h3>Location</h3>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <form class="contact-form fade-in">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="your@email.com" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="social-links">
                <a href="#" aria-label="GitHub">📊</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📸</a>
            </div>
            <p>&copy; 2024 Alex Chen. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Fade in animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Particle animation
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
            document.getElementById('particles').appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 30000);
        }

        // Create particles periodically
        setInterval(createParticle, 300);

        // Initial particles
        for (let i = 0; i < 50; i++) {
            setTimeout(createParticle, i * 100);
        }

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Add hover effects for portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Dynamic gradient animation
        let gradientAngle = 0;
        setInterval(() => {
            gradientAngle += 1;
            document.body.style.background = `linear-gradient(${gradientAngle}deg, #667eea 0%, #764ba2 100%)`;
        }, 100);
    </script>
</body>
</html>