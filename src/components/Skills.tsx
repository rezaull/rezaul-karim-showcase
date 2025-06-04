
import { Code, Database, Globe, Smartphone, Zap, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Python Automation",
      description: "Streamlining workflows and processes with intelligent automation solutions",
      color: "from-yellow-400 to-orange-500",
      progress: 95
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Django",
      description: "Building robust, scalable web applications with Python's premier framework",
      color: "from-green-400 to-green-600",
      progress: 90
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Laravel",
      description: "Creating elegant PHP applications with expressive, clean syntax",
      color: "from-red-400 to-red-600",
      progress: 85
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "React",
      description: "Developing dynamic, interactive user interfaces with modern JavaScript",
      color: "from-blue-400 to-cyan-500",
      progress: 88
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Tailwind CSS",
      description: "Crafting beautiful, responsive designs with utility-first CSS framework",
      color: "from-teal-400 to-blue-500",
      progress: 92
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "WordPress",
      description: "Building custom themes and plugins for content management solutions",
      color: "from-purple-400 to-purple-600",
      progress: 80
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Expertise Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                <CardTitle className="text-gray-900 dark:text-white text-xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base mb-4">
                  {skill.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.progress}%</span>
                  </div>
                  <Progress 
                    value={skill.progress} 
                    className="h-2 bg-gray-200 dark:bg-slate-700"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
