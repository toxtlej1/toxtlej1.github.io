import React from 'react';
import { HeroUIProvider, Button, Card, CardBody, CardHeader, Divider, Link, Chip, Tooltip, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Github, Mail, ExternalLink, Code2, Cloud, Terminal, Workflow, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <HeroUIProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <Navbar isBordered className="backdrop-blur-md bg-background/70">
          <NavbarBrand>
            <p className="font-bold text-inherit tracking-tighter text-xl">TOXTLEJ1</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#about">About</Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#projects">Projects</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} isIconOnly variant="flat" href="https://github.com/toxtlej1">
                <Github size={20} />
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-24">
          {/* Hero Section */}
          <section className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip color="primary" variant="dot" className="border-none bg-primary/10 text-primary px-4">
                Available for New Opportunities
              </Chip>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-8xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Software Engineer. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                Cloud Architect.
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-default-500 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specializing in Automation, Infrastructure, and Scalable Cloud Solutions. Building robust systems that empower developers and scale businesses.
            </motion.p>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" color="primary" radius="full" endContent={<ChevronRight size={18}/>} as={Link} href="#projects">
                View My Work
              </Button>
              <Button size="lg" variant="bordered" radius="full" startContent={<Mail size={18}/>} as={Link} href="mailto:4a6573757320@protonmail.com">
                Contact Me
              </Button>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight">Technical Expertise</h2>
              <p className="text-lg text-default-500">
                I thrive at the intersection of development and operations. My focus is on creating seamless developer experiences through automation and reliable infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Automation", "Cloud Architecture", "Infrastructure as Code", "CI/CD", "Integrations", "Python", "Node.js", "Java", "TypeScript", "Terraform", "Docker"].map((skill) => (
                  <Chip key={skill} variant="flat" size="md">{skill}</Chip>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-default-100 rounded-3xl flex flex-col gap-2">
                <Terminal className="text-blue-500" />
                <p className="font-bold">Automation</p>
              </div>
              <div className="p-6 bg-default-100 rounded-3xl flex flex-col gap-2">
                <Cloud className="text-indigo-500" />
                <p className="font-bold">Cloud</p>
              </div>
              <div className="p-6 bg-default-100 rounded-3xl flex flex-col gap-2">
                <Workflow className="text-purple-500" />
                <p className="font-bold">Workflows</p>
              </div>
              <div className="p-6 bg-default-100 rounded-3xl flex flex-col gap-2">
                <Code2 className="text-pink-500" />
                <p className="font-bold">Scalability</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight">Selected Projects</h2>
              <p className="text-default-500 text-lg">A mix of completed, ongoing, and experimental work.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="AI-Empowered Infra Path"
                description="An open-source curriculum for college students to master Cloud Infra using AI as a mentor. Built with Astro and HeroUI."
                link="https://github.com/toxtlej1/infra-ai-learning-path"
                tags={["Astro", "Tailwind", "AI", "DevOps"]}
                featured
              />
              <ProjectCard 
                title="Dictionary of Usernames"
                description="Python application for managing and generating large-scale username dictionaries for testing and security."
                link="https://github.com/toxtlej1/Dictionary_of_Usernames"
                tags={["Python", "Security", "CLI"]}
              />
              <ProjectCard 
                title="KittyLitty"
                description="Node.js collaborative platform. A comprehensive project focused on full-stack integration and community features."
                link="https://github.com/Cat-Master-Group/KittyLitty"
                tags={["Node.js", "Full Stack", "Collaboration"]}
              />
              <ProjectCard 
                title="Generate-Email-App"
                description="Java-based application for enterprise email generation and organizational management workflows."
                link="https://github.com/toxtlej1/Generate-Email-Application"
                tags={["Java", "Enterprise", "Logic"]}
              />
            </div>
          </section>
        </main>

        <footer className="border-t border-default-100 py-12 text-center text-default-400">
          <p>© {new Date().getFullYear()} TOXTLEJ1. Built with Astro & HeroUI.</p>
        </footer>
      </div>
    </HeroUIProvider>
  );
};

const ProjectCard = ({ title, description, link, tags, featured = false }) => {
  return (
    <Card 
      isHoverable 
      isPressable 
      as={Link} 
      href={link} 
      className={`border-none p-4 ${featured ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10' : 'bg-default-50'}`}
    >
      <CardHeader className="flex flex-col items-start gap-2">
        <div className="flex justify-between w-full items-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <ExternalLink size={18} className="text-default-400" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <Chip key={tag} size="sm" variant="flat">{tag}</Chip>
          ))}
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-default-500 leading-relaxed">{description}</p>
      </CardBody>
    </Card>
  );
};
