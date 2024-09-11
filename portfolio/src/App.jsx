import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ChevronDownIcon,
  Code2Icon,
} from "lucide-react";
import DocumentManagementImg from "./assets/document_management.jpg";
import ExamMarkRecomitionImg from "./assets/exam_mark_recognition.jpg";
import VoteMarkRecomitionImg from "./assets/vote_mark_recognition.jpg";
import PhotoProfileImg from "./assets/photo_profile.png";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "C#", level: 95 },
    { name: "WPF", level: 95 },
    { name: "SQL Server", level: 85 },
    { name: "Windows Service", level: 80 },
    { name: "WCF", level: 80 },
    { name: "ASP.NET", level: 70 },
    { name: "Entity Framework", level: 70 },
  ];

  const projects = [
    {
      title: "Sistema de Gestión Documental",
      description:
        "JustThis products: MIKA, VDB, STA. Gestión ducumental para la policía Suiza del canton de Aargau",
      image: DocumentManagementImg,
      technologies: ["C#", "WPF", "SQL Server"],
    },
    {
      title: "Sistema de Gestión Documental",
      description:
        "NAPSTRA. Gestión ducumental para la policía Suiza del canton de Zurich",
      image: DocumentManagementImg,
      technologies: ["C#", "WPF", "SQL Server"],
    },
    {
      title: "Core de reconocimiento de votos",
      description:
        "Solución para el reconocimiento de marcas en votos de las elecciones de República Dominicana",
      image: VoteMarkRecomitionImg,
      technologies: ["C#", "Windows Form", "Windows Service", "Emgu CV"],
    },
    {
      title: "Sistema de reconocimiento de marcas en exámenes",
      description:
        "Instituto Cervantes: Sistema de reconocimiento de marcas en exámenes",
      image: ExamMarkRecomitionImg,
      technologies: ["C#", "Windows Service", "Emgu CV"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(66,39,90,0.3) 0%, rgba(115,75,109,0.1) 100%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6 xs:space-x-4">
            <li>
              <a
                href="#home"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative"
        style={{ opacity, scale }}
      >
        <motion.div
          className="mb-8 sm:mt-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={PhotoProfileImg}
            alt="Foto de perfil"
            className="object-cover rounded-full border-4 border-purple-400 profile-image"
          />
        </motion.div>
        <div className="text-center z-10">
          <motion.h1
            className="text-5xl font-bold mb-4 text-cyan-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jose Luis Castillo
          </motion.h1>
          <motion.p
            className="text-2xl text-purple-300 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desarrollador Senior .NET
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="https://github.com/jlcastillog" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 text-purple-400 hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/jose-luis-castillo-galvez-630a932ab/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 text-purple-400 hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto: jlcastillog@outlook.es" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-800 text-purple-400 hover:bg-gray-700 hover:text-cyan-300 transition-colors"
              >
                <MailIcon className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>
          <motion.p
            className="px-8 text-2xl text-cyan-300 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desarrollador .NET con experiencia en C# y WPF. He trabajado en
            proyectos de desarrollo de aplicaciones de escritorio. Apasionado
            por crear soluciones eficientes y escalables. Amante del código
            limpio y la resolución de problemas.
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDownIcon className="h-8 w-8 text-cyan-300" />
        </motion.div>
      </motion.section>

      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-purple-300 text-lg">
                    {skill.name}
                  </span>
                  <span className="text-cyan-300 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <motion.div
                  className="bg-gray-700 h-4 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.7 + index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-300/10"
          style={{ fontSize: "20rem", zIndex: -1 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Code2Icon />
        </motion.div>
      </section>

      <section
        id="projects"
        className="py-20 bg-gray-800/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">
            Proyectos Destacados
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full flex flex-col bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-contain rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="text-cyan-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-300">
                      {project.description}
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-purple-900 text-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </section>

      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-300">Contacto</h2>
          <p className="mb-8 text-purple-300">
            ¿Interesado en trabajar juntos? ¡Hablemos!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="mailto: jlcastillog@outlook.es">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                <MailIcon className="mr-2 h-4 w-4" /> Contáctame
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </section>

      <footer className="bg-gray-900/80 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2024 Jose Luis Castillo. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
