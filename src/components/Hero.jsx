import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Sparkles, ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2
  }))

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-accent-400 animate-pulse" />
              <span className="text-accent-300 font-medium text-lg">Explore o Infinito</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Explore o</span>
              <br />
              <span className="glow-text">Universo</span>
              <br />
              <span className="text-white">com a</span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                Austronaut
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Desvendando os mistérios das estrelas e descobrindo o espaço além da Terra. 
              Sua bússola para o cosmos está aqui.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                className="star-button flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                <span>Iniciar Jornada Cósmica</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('services')}
                className="bg-transparent border-2 border-primary-400 text-primary-300 hover:bg-primary-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descobrir Mais
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 relative"
              >
                <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 border-dashed" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <Star className="w-4 h-4 text-accent-400 animate-pulse" />
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2">
                  <Star className="w-3 h-3 text-primary-400 animate-pulse" />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                  <Star className="w-5 h-5 text-secondary-400 animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-600/30 via-secondary-600/30 to-accent-600/30 flex items-center justify-center">
                    <Rocket className="w-24 h-24 text-primary-300 transform rotate-45" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-300 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Explorar</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}