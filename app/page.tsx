'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Download, ArrowRight, Code, Palette, Database, Rocket, Lightbulb, Briefcase, GraduationCap } from 'lucide-react'
import './portfolio.css'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolling, setScrolling] = useState(false)

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      technologies: ['React', 'Node.js', 'TypeScript', 'Stripe', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and sentiment analysis',
      technologies: ['Next.js', 'Python', 'WebSockets', 'NLP', 'Docker'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for analyzing complex datasets with real-time updates',
      technologies: ['D3.js', 'React', 'GraphQL', 'Apollo', 'Three.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans and progress tracking',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      link: '#'
    }
  ]

  // Skills data
  const skills = [
    { name: 'JavaScript', level: 95, category: 'languages' },
    { name: 'TypeScript', level: 90, category: 'languages' },
    { name: 'Python', level: 85, category: 'languages' },
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 90, category: 'frontend' },
    { name: 'Vue.js', level: 80, category: 'frontend' },
    { name: 'Node.js', level: 90, category: 'backend' },
    { name: 'Express', level: 85, category: 'backend' },
    { name: 'Django', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 85, category: 'database' },
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'Firebase', level: 75, category: 'database' }
  ]

  // Experience data
  const experience = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading development of enterprise-level applications using modern web technologies. Mentoring junior developers and implementing best practices for code quality and performance optimization.',
      responsibilities: [
        'Architected and developed scalable web applications',
        'Implemented CI/CD pipelines for automated testing and deployment',
        'Optimized application performance reducing load times by 40%',
        'Led a team of 5 developers on multiple projects'
      ]
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2018 - 2021',
      description: 'Developed responsive user interfaces and interactive web applications using React and modern JavaScript frameworks.',
      responsibilities: [
        'Built reusable UI components and libraries',
        'Implemented responsive design patterns',
        'Integrated RESTful APIs and GraphQL endpoints',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ]
    }
  ]

  // Education data
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      period: '2016 - 2018',
      details: 'Specialized in Human-Computer Interaction and Machine Learning'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Massachusetts Institute of Technology',
      period: '2012 - 2016',
      details: 'Graduated with Honors, Dean\'s List all semesters'
    }
  ]

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop
        const sectionHeight = sectionElement.clientHeight
        
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || ''
        }
      })
      
      setActiveSection(current)
      setScrolling(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-background to-secondary/10">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolling ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md">JD</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${activeSection === section ? 'bg-primary text-primary-foreground nav-active' : 'text-muted-foreground hover:text-primary'}`}
                >
                  <span className="capitalize">{section}</span>
                  {activeSection === section && <span className="w-2 h-2 bg-accent rounded-full"></span>}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 hero-gradient">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="scroll-indicator">
            <ArrowRight className="w-6 h-6 text-primary rotate-90" />
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-primary">John Doe</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-muted-foreground">
                  Full Stack Developer & UI Designer
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg">
                I build beautiful, functional web applications that solve real-world problems. 
                With 8+ years of experience in full-stack development, I specialize in creating 
                scalable solutions with modern technologies.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group btn-hover">
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group btn-hover">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Contact Me</span>
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="text-sm">linkedin.com/in/johndoe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-5 w-5 text-primary" />
                  <span className="text-sm">github.com/johndoe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Twitter className="h-5 w-5 text-primary" />
                  <span className="text-sm">@johndoe</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-96 h-96 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                      <Code className="w-16 h-16 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                {/* Tech icons orbiting */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                    const angle = (i * 45) * (Math.PI / 180)
                    const radius = 120
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    return (
                      <div key={i} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <Rocket className="w-4 h-4 text-accent-foreground" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Lightbulb className="mr-2 h-4 w-4" />
              About Me
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              My Journey in Development
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building digital experiences that make an impact
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="text-primary" />
                    <span>Professional Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    With over 8 years in the industry, I\'ve worked with startups and 
                    Fortune 500 companies to deliver high-quality software solutions. 
                    My expertise spans full-stack development, UI/UX design, and 
                    technical leadership.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="text-primary" />
                    <span>Education & Growth</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I hold a Master\'s degree in Computer Science from Stanford University, 
                    where I specialized in Human-Computer Interaction and Machine Learning. 
                    Continuous learning is at the core of my professional philosophy.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="text-primary" />
                    <span>Development Philosophy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Clean, maintainable code that follows best practices</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">User-centric design with accessibility in mind</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Performance optimization for fast, responsive applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="text-primary" />
                    <span>Beyond Coding</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    When I\'m not coding, you can find me hiking in nature, experimenting 
                    with photography, or contributing to open-source projects. I believe 
                    creativity in all forms enhances my development work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Rocket className="mr-2 h-4 w-4" />
              My Skills
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-8">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
            </TabsList>
            <div className="space-y-6">
              {['languages', 'frontend', 'backend', 'database'].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between p-4 bg-card rounded-lg">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="w-full mx-4">
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full skill-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground w-12 text-right">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              Professional Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Where I\'ve worked and what I\'ve accomplished
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((job) => (
              <Card key={job.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-primary/5 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-primary font-medium mt-2">{job.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{job.period}</p>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Separator className="my-4" />
                    <div className="space-y-3">
                      {job.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{responsibility}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Code className="mr-2 h-4 w-4" />
              My Projects
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              Featured Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and creativity
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group project-card card-hover">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <Badge variant="secondary">{project.technologies.length}+ tech</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Separator className="my-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              Let\'s Build Something Amazing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I\'m always open to new opportunities and collaborations
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:contact@johndoe.dev" className="text-primary hover:underline">
                    contact@johndoe.dev
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="text-primary" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">San Francisco, CA, USA</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form 
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget as HTMLFormElement)
                      
                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            name: formData.get('name'),
                            email: formData.get('email'),
                            subject: formData.get('subject'),
                            message: formData.get('message')
                          })
                        })
                        
                        const result = await response.json()
                        if (result.success) {
                          alert('Message sent successfully!')
                          ;(e.currentTarget as HTMLFormElement).reset()
                        } else {
                          alert(`Error: ${result.error || 'Failed to send message'}`)
                        }
                      } catch (error) {
                        alert('Failed to send message. Please try again later.')
                      }
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background form-focus"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background form-focus"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background form-focus"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background form-focus"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full btn-hover">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2025 John Doe. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {scrolling && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
        >
          <ArrowRight className="h-5 w-5 rotate-90" />
        </button>
      )}
    </div>
  )
}









