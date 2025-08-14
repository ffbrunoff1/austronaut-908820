import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Globe, Rocket, Compass, Lightbulb } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Telescope,
      title: "Observação Avançada",
      description: "Tecnologia de ponta para explorar os confins do universo com precisão astronômica."
    },
    {
      icon: Star,
      title: "Mapeamento Estelar",
      description: "Catalogação detalhada de constelações e sistemas estelares distantes."
    },
    {
      icon: Globe,
      title: "Exploração Planetária",
      description: "Descoberta e análise de exoplanetas em zonas habitáveis pelo cosmos."
    },
    {
      icon: Rocket,
      title: "Missões Espaciais",
      description: "Planejamento e execução de jornadas para destinos cósmicos inexplorados."
    },
    {
      icon: Compass,
      title: "Navegação Cósmica",
      description: "Sistemas de orientação para viagens interestelares seguras e precisas."
    },
    {
      icon: Lightbulb,
      title: "Pesquisa Inovadora",
      description: "Desenvolvimento de teorias e tecnologias revolucionárias para a astronomia."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-accent-900/10" />
      
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
            <Star className="w-6 h-6 text-accent-400 animate-pulse" />
            <span className="text-accent-300 font-medium text-lg">Do Nosso Observatório</span>
            <Star className="w-6 h-6 text-accent-400 animate-pulse" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Para o Seu</span>
            <br />
            <span className="glow-text">Conhecimento</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Na Austronaut, transformamos a curiosidade sobre o cosmos em jornadas extraordinárias 
            de descoberta. Somos pioneiros em exploração espacial e educação astronômica, 
            guiando você através dos mistérios infinitos do universo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="cosmic-card group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mt-6 origin-left"
                />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="cosmic-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Nossa Missão Cósmica
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Acreditamos que o conhecimento sobre o universo deve ser acessível a todos. 
              Nossa missão é democratizar a astronomia, oferecendo experiências únicas 
              que conectam as pessoas com a grandiosidade do cosmos.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span>Descoberta</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" />
                <span>Exploração</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                <span>Conhecimento</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}