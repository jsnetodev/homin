import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 bg-white text-blue-600 p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chat"
      >
        <div className="relative">
          <MessageCircle className="w-8 h-8" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 bg-white rounded-2xl shadow-2xl w-80 z-50 transform transition-all duration-300 animate-slide-up">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Assistente H⊕MIN+</h3>
                  <p className="text-white/80 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="bg-blue-50 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700">
                Olá! Como posso ajudar você hoje? 😊
              </p>
            </div>
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
