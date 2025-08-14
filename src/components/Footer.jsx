import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: "Exploração",
      links: [
        { name: "Observatório Virtual", action: () => scrollToSection('services') },
        { name: "Mapeamento Estelar", action: () => scrollToSection('services') },
        { name: "Missões Espaciais", action: () => scrollToSection('services') },
        { name: "Navegação Cósmica", action: () => scrollToSection('services') }
      ]
    },
    {
      title: "Sobre Nós",
      links: [
        { name: "Nossa Missão", action: () => scrollToSection('about') },
        { name: "Tecnologia", action: () => scrollToSection('about') },
        { name: "Pesquisa", action: () => scrollToSection('about') },
        { name: "Equipe", action: () => scrollToSection('about') }
      ]
    },
    {
      title: "Contato",
      links: [
        { name: "Fale Conosco", action: () => scrollToSection('contact') },
        { name: "Visitas", action: () => scrollToSection('contact') },
        { name: "Parcerias", action: () => scrollToSection('contact') },
        { name: "Suporte", action: () => scrollToSection('contact') }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "contato@austronaut.com",
      href: "mailto:contato@austronaut.com"
    },
    {
      icon: Phone,
      text: "+55 (11) 9999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      text: "São Paulo, Brasil",
      href: "#"
    }
  ]

  return (
    <footer className="bg-gray-900 border-t border-primary-500/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div 
                className="flex items-center space-x-3 mb-6 cursor-pointer"
                onClick={() => scrollToSection('hero')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <Telescope className="w-8 h-8 text-primary-400" />
                  <Star className="w-4 h-4 text-accent-400 absolute -top-1 -right-1 animate-twinkle" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                  Austronaut
                </span>
              </motion.div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Sua bússola para o cosmos. Explorando os mistérios do universo 
                e conectando pessoas com a grandiosidade do espaço.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 text-gray-400 hover:text-primary-300 transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{item.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h3 className="text-lg font-semibold text-white mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-px bg-gradient-to-r from-primary-500 to-transparent" />
                </h3>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={link.action}
                        className="text-gray-400 hover:text-primary-300 transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-500/20 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2023 Austronaut. Criado com</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-primary-200 font-medium transition-colors duration-300"
              >
                Papum
              </a>
              <span>. Todos os direitos reservados.</span>
            </div>

            <div className="flex items-center space-x-6">
              <motion.button
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-primary-300 transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
              >
                Voltar ao Topo
              </motion.button>
              
              <div className="flex items-center space-x-2 text-gray-500 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Sistema Online</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <div className="flex items-center justify-center space-x-4 text-gray-600 text-xs">
            <Star className="w-3 h-3 animate-twinkle" />
            <span>Explorando o infinito desde 2023</span>
            <Star className="w-3 h-3 animate-twinkle" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}