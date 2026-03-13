import React from 'react';
import { HeroUIProvider, Button, Card, CardBody, CardHeader, Divider, Link, Chip, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Github, Mail, ExternalLink, Bot, Zap, TrendingDown, Target, ShieldCheck, Cpu, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <HeroUIProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary-200 dark:selection:bg-primary-900">
        {/* Navigation */}
        <Navbar isBordered className="backdrop-blur-md bg-background/70">
          <NavbarBrand>
            <p className="font-bold text-inherit tracking-tighter text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">TOXTLEJ1</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-8" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#impact" className="font-medium">Impact</Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#solutions" className="font-medium">Solutions</Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#advisory" className="font-medium text-primary">Advisory</Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} isIconOnly variant="light" href="https://github.com/toxtlej1">
                <Github size={20} />
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" variant="flat" href="mailto:4a6573757320@protonmail.com" className="font-semibold">
                Hire Me
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <main className="max-w-6xl mx-auto px-6 py-12 md:py-32 flex flex-col gap-32">
          
          {/* Hero Section: Strategic AI Advisory */}
          <section className="flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip color="primary" variant="dot" className="border-none bg-primary/10 text-primary px-4 py-1">
                AI Agent Specialist | Systems Consultant
              </Chip>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AI Engineering <br />
              <span className="text-default-400">for the </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Bottom Line.
              </span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-default-500 max-w-3xl leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Saving companies millions by deploying custom Agentic Solutions built on a foundation of deep Software and Systems Engineering.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" color="primary" radius="full" endContent={<ChevronRight size={18}/>} as={Link} href="#impact" className="h-14 px-8 text-lg font-bold">
                Explore Impact
              </Button>
              <Button size="lg" variant="bordered" radius="full" startContent={<Target size={18}/>} as={Link} href="mailto:4a6573757320@protonmail.com" className="h-14 px-8 text-lg font-bold">
                Request Advisory Session
              </Button>
            </motion.div>
          </section>

          {/* Key Impact Stats */}
          <section id="impact" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              label="Operational Cost Saved" 
              value="$2M+" 
              icon={<TrendingDown className="text-success" />} 
              description="Through automated agentic workflows and system optimizations."
            />
            <StatCard 
              label="Agentic Solutions Deployed" 
              value="15+" 
              icon={<Bot className="text-primary" />} 
              description="Custom agents handling complex reasoning and decision tasks."
            />
            <StatCard 
              label="Production Uptime" 
              value="99.99%" 
              icon={<ShieldCheck className="text-indigo-500" />} 
              description="Architecting systems that don't just work, but scale reliably."
            />
          </section>

          {/* Advisory & Expertise Section */}
          <section id="advisory" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-bold tracking-tight">The Advisory Edge</h2>
              <p className="text-xl text-default-500 leading-relaxed">
                I specialize in "Deep Dives"—systemic audits that uncover massive inefficiencies. My background in Software and Systems Engineering ensures that the AI solutions I build are production-grade, secure, and highly cost-effective.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 bg-default-100 rounded-2xl">
                  <div className="p-2 bg-white dark:bg-default-200 rounded-xl shadow-sm"><Zap className="text-yellow-500" /></div>
                  <div>
                    <p className="font-bold">Agentic Workflow Automation</p>
                    <p className="text-default-500">Replacing expensive manual processes with intelligent, self-correcting AI agents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-default-100 rounded-2xl">
                  <div className="p-2 bg-white dark:bg-default-200 rounded-xl shadow-sm"><Cpu className="text-blue-500" /></div>
                  <div>
                    <p className="font-bold">Deep Systems Auditing</p>
                    <p className="text-default-500">Identifying architectural bottlenecks that leak capital and performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-default-100 to-default-200 p-8 rounded-[40px] flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Domain Mastery</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "LLM Orchestration", "Agentic RAG", "Prompt Engineering", 
                  "Cloud Native Architecture", "Terraform", "Docker/K8s", 
                  "Performance Tuning", "Python", "Node.js", "Systems Security"
                ].map((skill) => (
                  <Chip key={skill} variant="flat" className="bg-background text-foreground font-semibold px-4" size="lg">{skill}</Chip>
                ))}
              </div>
              <Divider className="my-2" />
              <div className="p-6 bg-primary/10 rounded-3xl border border-primary/20">
                <p className="text-primary font-bold text-lg mb-2">Consulting Offer:</p>
                <p className="text-default-600 italic">"I don't just build features; I build ROI. Let's audit your current infrastructure and find where AI can save you the next million."</p>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section id="solutions" className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-bold tracking-tight">Case Studies & Solutions</h2>
              <p className="text-default-500 text-xl">Selected work focused on high-impact AI and automation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SolutionCard 
                title="Strategic AI Workforce Transformation"
                description="Built a comprehensive open-source curriculum for the next generation of engineers. Focused on creating 'AI-Native' developers who deliver 10x ROI."
                link="https://github.com/toxtlej1/infra-ai-learning-path"
                tags={["AI Education", "Strategic Advisory"]}
                featured
              />
              <SolutionCard 
                title="Automated Security Intelligence"
                description="High-performance Python application for security auditing. Used to automate complex data extraction and pattern matching at scale."
                link="https://github.com/toxtlej1/Dictionary_of_Usernames"
                tags={["Security", "Python", "Automation"]}
              />
              <SolutionCard 
                title="Collaborative Agentic Ecosystems"
                description="Full-stack integration platform designed for seamless team collaboration, now being reframed for agent-to-agent interactions."
                link="https://github.com/Cat-Master-Group/KittyLitty"
                tags={["Node.js", "Full Stack"]}
              />
              <SolutionCard 
                title="Enterprise Process Automation"
                description="Java-based logic for enterprise-scale email and identity workflows, optimizing manual organizational tasks."
                link="https://github.com/toxtlej1/Generate-Email-Application"
                tags={["Java", "Enterprise"]}
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 rounded-[50px] p-12 md:p-24 text-center text-white flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Ready to save your next million?</h2>
            <p className="text-xl md:text-2xl opacity-80 max-w-2xl">
              Currently accepting selective advisory and consulting engagements for companies looking to lead in the AI era.
            </p>
            <Button size="lg" className="bg-white text-blue-600 font-bold h-16 px-12 text-xl" radius="full" as={Link} href="mailto:4a6573757320@protonmail.com">
              Let's Talk Strategy
            </Button>
          </section>
        </main>

        <footer className="border-t border-default-100 py-16 text-center text-default-400">
          <p className="font-medium tracking-wide">© {new Date().getFullYear()} TOXTLEJ1 | ELITE AI ADVISORY</p>
        </footer>
      </div>
    </HeroUIProvider>
  );
};

const StatCard = ({ label, value, icon, description }) => (
  <Card className="border-none bg-default-50 p-6 flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <div className="p-3 bg-white dark:bg-default-200 rounded-2xl shadow-sm">{icon}</div>
      <p className="text-4xl font-black tracking-tighter">{value}</p>
    </div>
    <div>
      <p className="font-bold text-lg mb-1">{label}</p>
      <p className="text-default-500 text-sm leading-relaxed">{description}</p>
    </div>
  </Card>
);

const SolutionCard = ({ title, description, link, tags, featured = false }) => (
  <Card 
    isHoverable 
    isPressable 
    as={Link} 
    href={link} 
    className={`border-none p-6 ${featured ? 'bg-gradient-to-br from-blue-600/10 to-indigo-600/10' : 'bg-default-50'}`}
  >
    <CardHeader className="flex flex-col items-start gap-4">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-2xl font-extrabold tracking-tight">{title}</h3>
        <ExternalLink size={20} className="text-default-400" />
      </div>
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <Chip key={tag} size="sm" variant="dot" className="border-none bg-white/50 dark:bg-black/20">{tag}</Chip>
        ))}
      </div>
    </CardHeader>
    <CardBody>
      <p className="text-default-500 text-lg leading-relaxed">{description}</p>
    </CardBody>
  </Card>
);
