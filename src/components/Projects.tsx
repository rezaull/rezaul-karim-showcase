
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Automation Suite",
      description: "Python-based automation system for inventory management, order processing, and customer communication. Reduced manual work by 80%.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tags: ["Python", "Django", "Automation", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Full-stack web application built with Laravel and React. Features property listings, virtual tours, and agent management.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tags: ["Laravel", "React", "MySQL", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Business Portfolio Website",
      description: "Custom WordPress theme with advanced SEO optimization, responsive design, and performance optimization achieving 95+ PageSpeed score.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["WordPress", "PHP", "JavaScript", "SEO"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard built with React and Django REST API. Real-time data visualization with charts and reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["React", "Django", "D3.js", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Automation Bot",
      description: "Python automation tool for social media management. Automated posting, engagement tracking, and analytics reporting.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop",
      tags: ["Python", "APIs", "Automation", "Data Analysis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Learning Management System",
      description: "Complete LMS built with Laravel featuring course management, student tracking, quiz system, and payment integration.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      tags: ["Laravel", "Vue.js", "Stripe", "MySQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of innovative solutions and successful implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="bg-slate-700 text-blue-400 hover:bg-slate-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
