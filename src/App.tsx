import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle, ShieldCheck, Activity, Phone, MessageCircle, Mic, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { BookingModal } from './components/BookingModal';
import { ChatWidget } from './components/ChatWidget';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';

function QuantumAnalyzerCard({ className = "", heroImage }: { className?: string; heroImage?: string }) {
  const [imgError, setImgError] = useState(false);
  const fallbackUrl = "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=1200";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative w-full max-w-6xl mx-auto bg-[#050c18] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5 ${className}`}
    >
      {/* SEO Headings - Hidden for users, visible for search engines */}
      <div className="sr-only">
        <h1>¿Cuándo fue la última vez que supiste cómo está tu cuerpo de verdad?</h1>
        <h2>Escáner de salud preventivo con tecnología avanzada en Baños Tivoli</h2>
        <p>Diagnóstico de sistemas cardiovascular, digestivo, hormonal e inmunitario.</p>
      </div>

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        {heroImage && !imgError ? (
          <img 
            src={heroImage} 
            alt="Analizador Cuántico Bío Eléctrico VitalHealth" 
            className="w-full h-full object-cover object-right opacity-100"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <img 
            src={fallbackUrl} 
            alt="Medical Tech Placeholder" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
        )}
        {/* Gradient Overlays - Ultra light to prioritize the uploaded image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050c18]/80 via-[#050c18]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c18]/10 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Content */}
        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-3xl md:text-4xl font-light text-[#c5a08e] tracking-[0.1em] uppercase">
              NUEVO
            </span>
            <div className="h-[2px] w-24 bg-[#c5a08e]/30 mt-4"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1] mb-10 tracking-tight uppercase">
            ANALIZADOR <br />
            CUÁNTICO <br />
            BÍO ELÉCTRICO
          </h2>

          <p className="text-xl md:text-2xl font-medium text-white mb-12 leading-relaxed">
            ¡Ahora digital con oxímetro y <br className="hidden md:block" /> frecuencia de pulso!
          </p>

          {/* Promotion Card */}
          <div className="relative group max-w-sm">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-sm"></div>
            <div className="relative bg-gradient-to-br from-gray-100/95 to-gray-200/95 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-2xl">
              <p className="text-gray-800 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 text-center border-b border-gray-500/20 pb-2">
                PROMOCIÓN DE LANZAMIENTO EXCLUSIVA
              </p>
              <div className="text-center">
                <p className="text-gray-900 font-black text-3xl md:text-4xl mb-1">¡50% de descuento</p>
                <p className="text-gray-900 font-black text-2xl md:text-3xl mb-4">en tu análisis!</p>
                <p className="text-gray-700 text-[10px] font-bold">*Aplican términos y condiciones</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual Area */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full flex items-center justify-center">
          {!heroImage || imgError ? (
            <div className="flex flex-col items-center text-center p-8">
              <div className="p-6 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <Activity className="w-12 h-12 text-teal-400 animate-pulse" />
              </div>
              <p className="text-teal-400 font-bold text-lg mb-2">Vista Previa del Analizador</p>
              <p className="text-slate-400 text-sm max-w-xs">
                Sube tu archivo <code className="bg-slate-800 px-2 py-1 rounded text-teal-300">analizador916.png</code> para verlo aquí.
              </p>
            </div>
          ) : null}
          <div className="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [heroImage, setHeroImage] = useState<string>('analizador916.png');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openVoiceModal = () => setIsVoiceModalOpen(true);
  const closeVoiceModal = () => setIsVoiceModalOpen(false);

  // VERSION: 1.0.1 - Manual Image Integration
  // AI image generation removed to allow manual upload of 'analizador916.png'
  // as requested by the user.

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/527293824651?text=Necesito%20más%20información%20sobre%20el%20Estudio%20Analisis%20BioCuántico',
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
      <section className="relative overflow-hidden py-20 lg:py-32 min-h-screen flex items-center bg-[#050c18]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Tech Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050c18]/80 via-transparent to-[#050c18]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-2 px-5 rounded-xl bg-teal-500/10 text-teal-400 text-xs font-bold mb-8 tracking-[0.3em] uppercase border border-teal-500/20">
              Atención Toluca, Zinacantepec, Almoloya de Juárez y Alrededores
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-10 leading-[1.1]">
              ¿Cuándo fue la última vez que supiste <span className="text-teal-400">cómo está tu cuerpo de verdad?</span>
            </h1>
          </div>

          <div className="relative">
            <QuantumAnalyzerCard heroImage={heroImage} />
            
            <div className="mt-16 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(40, 167, 69, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="px-12 py-6 bg-[#28a745] hover:bg-[#218838] text-white text-2xl font-black rounded-full shadow-2xl transition-all flex items-center gap-4"
              >
                <Calendar className="w-8 h-8" />
                ¡Quiero Asistir al Escáner Biocuántico!
              </motion.button>
            </div>
          </div>
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

      {/* AI Assistant Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Dotted Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
              <Activity className="w-4 h-4" />
              Nueva Tecnología
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              ¿Tienes dudas sobre el <br className="hidden md:block" /> Análisis Cuántico?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Habla directamente con nuestro <span className="font-bold text-slate-800">Asistente Virtual</span>. Experto en 
              salud y bienestar, disponible 24/7 para responder tus preguntas al instante.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <Mic className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Pregúntale a nuestro Asistente Inteligente
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-slate-500 font-semibold">Ejemplos:</p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">
                        Pregunta: <span className="italic text-slate-500">"¿Qué es el análisis biocuántico?"</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700">
                        Pregunta: <span className="italic text-slate-500">"¿Cómo puede ayudarme a mejorar mi salud?"</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <p className="text-slate-700 font-medium">
                        Respuestas inmediatas y precisas por voz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <motion.button 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0px rgba(124, 99, 78, 0.4)",
                      "0 0 0 20px rgba(124, 99, 78, 0)",
                      "0 0 0 0px rgba(124, 99, 78, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  onClick={openVoiceModal}
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#7c634e] flex flex-col items-center justify-center text-white shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <Mic className="w-12 h-12 mb-4" />
                  <span className="text-xl font-bold tracking-wider">ACTIVAR</span>
                  <span className="text-sm opacity-80">Asistente de Voz</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-slate-400 text-sm font-medium">
              Powered by LeadConnector AI & omniaflow.pro Technology
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-10 py-4 bg-[#0a1128] hover:bg-slate-900 text-white text-lg font-bold rounded-full shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Agendar una cita
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-10 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white text-lg font-bold rounded-full shadow-xl transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              ¡Quiero agendar por WhatsApp!
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
                    <p className="text-gray-400">Miércoles 13, Jueves 14 y Viernes 15 de Mayo, 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Horario</h4>
                    <p className="text-gray-400">10:00 AM - 06:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Ubicación</h4>
                    <p className="text-gray-400">BAÑOS TIVOLI — C. Plutarco González y Rafael Araujo no. 501, Barrio de la Merced, CP 50080, Toluca de Lerdo</p>
                    <p className="text-sm text-gray-500 mt-1">(Referencia: Planta Baja)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Contacto</h4>
                    <p className="text-gray-400">Atención y Soporte</p>
                    <p className="text-teal-400 font-mono mt-1">729 382 4651</p>
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

      {/* Promotion Card Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <QuantumAnalyzerCard heroImage={heroImage} />
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

      {/* Modal Overlay for Voice Assistant */}
      <VoiceAssistantModal isOpen={isVoiceModalOpen} onClose={closeVoiceModal} />
    </div>
  );
}
