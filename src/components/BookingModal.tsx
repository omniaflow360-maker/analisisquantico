import { X } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scriptSrc = "https://agency.omniaflow.pro/js/form_embed.js";
      if (document.querySelector(`script[src="${scriptSrc}"]`)) {
        return;
      }

      // Load the form embed script when modal opens
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Agendar Cita - Jornada Toluca</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <iframe 
            src="https://agency.omniaflow.pro/widget/booking/WFG9NIulCy9dLEb3zefc" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
            scrolling="no" 
            id="WFG9NIulCy9dLEb3zefc_1777419409416"
            title="Booking Widget"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
