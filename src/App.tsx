import React from 'react';
import { ArrowRight, CheckCircle, Shield, Cloud, Smartphone, Terminal, Palette, Server, Github, Linkedin, Mail, Phone, ArrowUpRight, Settings } from 'lucide-react';

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNosServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <img src="public/images/agishatech-logo.png" alt="AgishaTech Logo" className="h-48 md:h-64 w-auto mx-auto mb-8" />
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Votre partenaire technologique pour l'innovation et la transformation digitale
          </p>
          <div className="flex gap-4 justify-center">
    
            <button 
              onClick={scrollToNosServices}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              Découvrir nos services <ArrowRight className="w-5 h-5" />
            </button>
          
            <a 
              href="https://github.com/michaelkennf"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-700 transition-colors"
            >
              Visitez nos projets <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-8 h-8" />,
                title: "Administration Réseaux et Systèmes",
                description: "Gestion et optimisation de vos infrastructures informatiques pour une performance maximale"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Développement Web et Mobile",
                description: "Création de sites web et d'applications mobiles sur mesure avec les dernières technologies"
              },
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Automatisation des Tâches",
                description: "Optimisation de vos processus métier grâce à l'automatisation intelligente"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Design Graphique",
                description: "Conception de logos et d'affiches qui captent l'attention et transmettent votre message"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sécurité des Systèmes",
                description: "Protection de vos systèmes et données contre les menaces informatiques"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Solutions Cloud",
                description: "Déploiement et gestion de solutions cloud sur AWS et Azure"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi Nous Choisir</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              "Expertise technique approfondie",
              "Solutions personnalisées à vos besoins",
              "Support technique réactif",
              "Engagement qualité et résultats"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Infrastructure IT ?</h2>
          <p className="text-xl mb-8">Contactez-nous pour une consultation personnalisée</p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors"
          >
            Nous Contacter <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AgishaTech</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour la transformation numérique et l'innovation technologique.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Administration Réseaux</li>
              <li>Développement Web/Mobile</li>
              <li>Automatisation</li>
              <li>Design Graphique</li>
              <li>Sécurité IT</li>
              <li>Solutions Cloud</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:agishatech@gmail.com" className="hover:text-blue-400 transition-colors">
                  agishatech@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:977246488" className="hover:text-blue-400 transition-colors">
                  977246488
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/michaelagishazigabe-6a7ba0309"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/michaelkennf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;