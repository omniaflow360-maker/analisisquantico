import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function ChatWidget() {
  const openWhatsApp = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=525615716918&text=Hola%2C+vi+informaci%C3%B3n+sobre+el+Esc%C3%A1ner+Biocu%C3%A1ntico.+Me+gustar%C3%ADa+saber+m%C3%A1s.&type=phone_number&app_absent=0',
      '_blank'
    );
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center border-2 border-white/20 transition-all group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        ¡Me interesa — escribir por WhatsApp!
      </div>
      <MessageCircle className="w-8 h-8" />
    </motion.button>
  );
}
