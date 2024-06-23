import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Efekt ubierania się modalnego okna po załadowaniu strony
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="px-4 py-64 bg-slate-900 grid place-content-center">
      {/* Usunięcie przycisku otwierającego modalne okno */}
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FontAwesomeIcon 
              icon={faExclamationCircle} 
              className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" 
            />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FontAwesomeIcon icon={faExclamationCircle} />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                UWAGA!
              </h3>
              <p className="text-center mb-6">
                Strona jeszcze nie jest skończona.
                Występują błedy, oraz niektóre żeczy są niedopracowane, lub nie działają.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Rozumiem
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
