import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick} 
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Ask Your Question</h2>
        <textarea
          placeholder="Type your question here..."
          className="border rounded-md w-full h-24 p-2 mb-4 text-white"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-violet-600 text-white rounded-md px-4 py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
