import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle, ShieldCheck, Activity, Phone, MessageCircle } from 'lucide-react';
import { BookingModal } from './components/BookingModal';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/527299357028?text=Necesito%20más%20información%20sobre%20el%20Estudio%20Analisis%20BioCuántico',
      '_blank'
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      <ChatWidget />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 min-h-[90vh] flex items-center">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/medical_device/1920/1080?blur=1" 
            alt="Quantum Bio-Electric Analyzer" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          {/* Light overlay to ensure text readability without being too dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-teal-50/50"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 tracking-wide uppercase border border-teal-200">
              Atención Zinacantepec y Alrededores
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight drop-shadow-sm">
              Explora Tu Bienestar Integral Con Nuestro Innovador <span className="text-teal-600">Análisis Biocuántico</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Descubre el estado de tu salud en minutos. Un análisis rápido, no invasivo y basado en resonancia electromagnética.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                ¡Quiero Asistir al Escáner!
              </motion.button>
              <a 
                href="#details" 
                className="px-8 py-4 bg-white/50 hover:bg-white text-gray-800 border border-gray-300 text-lg font-medium rounded-full transition-colors backdrop-blur-sm"
              >
                Ver Detalles
              </a>
            </div>
            
            <p className="mt-4 text-xs text-gray-500 italic font-medium">
              * Los resultados son orientativos y no sustituyen un diagnóstico médico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Activity className="w-8 h-8 text-teal-600" />,
                title: "Detección Temprana",
                desc: "Identifica desequilibrios en los sistemas clave de tu organismo antes de que se conviertan en problemas mayores."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "No Invasivo",
                desc: "Realiza el escaneo a través de la palma de tu mano sin dolor, sin agujas y sin molestias."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
                title: "Científicamente Basado",
                desc: "Utiliza técnicas de análisis de biofrecuencias y resonancia electromagnética para una evaluación precisa."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-white rounded-xl inline-block shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons below cards */}
          <motion.div 
            {...fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Agenda Ahora
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agenda por WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Detalles del Evento</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Únete a nosotros para este evento exclusivo de lanzamiento. Evaluaremos tu salud enfocándonos en los sistemas hormonal, digestivo, cardiovascular e inmunitario.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Calendar className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Fecha</h4>
                    <p className="text-gray-400">Martes 10, Miércoles 11 y Jueves 12 de Marzo, 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Horario</h4>
                    <p className="text-gray-400">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Ubicación</h4>
                    <p className="text-gray-400">Las Torres 123, Col. Linda Vista, Zinacantepec, Edo. Méx.</p>
                    <p className="text-sm text-gray-500 mt-1">(Frente al DIF de Zinacantepec)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Contacto</h4>
                    <p className="text-gray-400">Carmen Berenice Gómez Salgado</p>
                    <p className="text-teal-400 font-mono mt-1">729 151 7400</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl"
            >
              <div className="text-center border-b border-gray-100 pb-6 mb-6">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Oferta de Lanzamiento</span>
                <h3 className="text-2xl font-bold mt-4">Análisis Completo</h3>
              </div>
              
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-5xl font-extrabold text-gray-900">$350</span>
                <span className="text-xl text-gray-500 line-through ml-3">$700</span>
              </div>
              <p className="text-center text-green-600 font-medium mb-8">¡Ahorras un 50%!</p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Escaneo de 4 sistemas principales",
                  "Resultados inmediatos",
                  "Asesoría personalizada",
                  "Sin dolor ni molestias"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <button 
                  onClick={openModal}
                  className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Agenda Ahora
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors flex justify-center items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agenda por WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-gray-500 text-sm mb-4">
            © 2026 omniaflow.pro. Todos los derechos reservados.
          </p>
          <div className="text-xs text-gray-400 max-w-3xl mx-auto space-y-2">
            <p>
              DESCARGOS DE RESPONSABILIDAD IMPORTANTES: Las recomendaciones que se dan en este sitio web no son garantía de éxito. 
              Los resultados del escáner son orientativos y no sustituyen un diagnóstico médico profesional.
            </p>
            <p>
              Este sitio no es parte del sitio web de Facebook o Meta Platforms Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Overlay for Booking */}
      {isModalOpen && (
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}
