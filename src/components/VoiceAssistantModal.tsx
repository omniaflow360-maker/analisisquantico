import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceAssistantModal({ isOpen, onClose }: VoiceAssistantModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const widgetId = "69cee95a1707aa33df4f38dc";
      
      // Remove any existing instance of this specific script to ensure it reloads/triggers correctly
      const existingScript = document.querySelector(`script[data-widget-id="${widgetId}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
      script.dataset.widgetId = widgetId;
      script.async = true;
      document.body.appendChild(script);

      // Note: LeadConnector widgets usually inject a floating button or a popup.
      // If the user wants it "centered", we provide a backdrop and a message, 
      // and the widget will handle the interaction.
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-10 flex flex-col items-center text-center"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Asistente de Voz Inteligente</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Estamos activando tu asistente personalizado. <br />
              Por favor, busca el icono de chat o el mensaje emergente para comenzar a hablar.
            </p>
            
            <div className="flex items-center gap-3 text-sm text-teal-600 font-semibold bg-teal-50 px-4 py-2 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              Conectando con la IA...
            </div>

            <div ref={containerRef} className="mt-4"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
