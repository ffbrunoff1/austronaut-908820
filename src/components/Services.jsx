import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Compass, Rocket, Globe, Zap, ArrowRight } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const explorationAreas = [
    {
      icon: Telescope,
      title: "Observatório Virtual",
      description: "Acesse telescópios de última geração para explorar nebulosas, galáxias e fenômenos astronômicos em tempo real.",
      features: ["Observação em tempo real", "Catálogo de objetos celestes", "Sessões guiadas"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Star,
      title: "Mapeamento Estelar",
      description: "Descubra constelações, sistemas estelares e aprenda sobre a navegação pelos céus noturnos.",
      features: ["Mapas interativos", "Histórias das constelações", "Guias de observação"],
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: Globe,
      title: "Exploração Planetária",
      description: "Viaje pelos planetas do sistema solar e além, descobrindo mundos fascinantes e suas características únicas.",
      features: ["Tours planetários", "Dados científicos atualizados", "Simulações 3D"],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Rocket,
      title: "Missões Espaciais",
      description: "Acompanhe missões espaciais ativas e planeje suas próprias jornadas exploratórias pelo cosmos.",
      features: ["Timeline de missões", "Planejamento de rotas", "Simulador de voo"],
      color: "from-primary-600 to-secondary-600"
    },
    {
      icon: Compass,
      title: "Navegação Cósmica",
      description: "Aprenda técnicas de orientação espacial e navegação usando referências estelares e tecnologia avançada.",
      features: ["Técnicas de navegação", "Ferramentas de orientação", "Cursos práticos"],
      color: "from-secondary-600 to-accent-600"
    },
    {
      icon: Zap,
      title: "Fenômenos Cósmicos",
      description: "Estude eventos astronômicos extraordinários como supernovas, buracos negros e ondas gravitacionais.",
      features: ["Alertas de eventos", "Análises científicas", "Visualizações avançadas"],
      color: "from-accent-600 to-primary-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Rocket className="w-6 h-6 text-accent-400 animate-pulse" />
            <span className="text-accent-300 font-medium text-lg">Áreas de Exploração</span>
            <Rocket className="w-6 h-6 text-accent-400 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Descubra o</span>
            <br />
            <span className="glow-text">Espaço</span>
            <br />
            <span className="text-white">Além da Terra</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Embarque em uma jornada extraordinária através do cosmos. Cada área de exploração 
            oferece experiências únicas e conhecimentos profundos sobre os mistérios do universo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {explorationAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group h-full"
              >
                <div className="cosmic-card h-full flex flex-col">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                    {area.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                    {area.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.5, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div className="mt-auto">
                    <motion.button
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 hover:from-primary-500 hover:to-secondary-500 border border-primary-500/30 hover:border-primary-400 text-primary-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Explorar Área</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mt-6 origin-left"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="cosmic-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Sua Bússola Para o Cosmos
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Cada jornada de exploração é cuidadosamente projetada para oferecer experiências 
              educativas e inspiradoras. Desde a observação de galáxias distantes até o 
              planejamento de missões espaciais, você terá acesso às ferramentas e conhecimentos 
              necessários para navegar pelos mistérios do universo.
            </p>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="star-button flex items-center justify-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Compass className="w-5 h-5" />
              <span>Começar Exploração</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}