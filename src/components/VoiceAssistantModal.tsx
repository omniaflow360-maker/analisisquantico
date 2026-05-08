import { X, Mic } from 'lucide-react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceAssistantModal({ isOpen, onClose }: VoiceAssistantModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col items-center min-h-[700px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full flex-1 flex items-center justify-center p-0">
              <div id="lc-widget-popup-container" className="w-full h-full min-h-[600px] flex items-center justify-center">
                <iframe 
                  id="voice-assistant-iframe"
                  title="Voice Assistant"
                  className="w-full h-[600px] border-none"
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="UTF-8">
                        <style>
                          body { 
                            margin: 0; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            height: 100vh; 
                            background-color: transparent;
                            overflow: hidden;
                          }
                          /* Try to force center any inner widget if possible */
                          .lc-widget-container {
                            position: relative !important;
                            bottom: auto !important;
                            right: auto !important;
                            margin: 0 auto !important;
                          }
                        </style>
                      </head>
                      <body>
                        <script 
                          src="https://widgets.leadconnectorhq.com/loader.js"  
                          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
                          data-widget-id="69fce1c8ba1fce0b935856f4"
                        ></script>
                      </body>
                    </html>
                  `}
                />
              </div>
            </div>

            <div className="pb-8 px-8 text-center">
              <p className="text-slate-400 text-xs font-medium">
                Powered by OmniaFlow
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
