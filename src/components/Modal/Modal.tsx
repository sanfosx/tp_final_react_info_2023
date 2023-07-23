import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useDeleteProduct } from '../PlatziAPI/PlatziAPI';
import { useQueryClient } from 'react-query'; // Importamos useQueryClient
import './Modal.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const modalRoot = document.getElementById('modal-portal')!;
  const queryClient = useQueryClient(); // Obtenemos el queryClient desde el hook useQueryClient

  const deleteProductMutation = useDeleteProduct(queryClient);



  useEffect(() => {
    if (open) {
      modalRoot.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Evita el scroll en el fondo cuando el modal está abierto
    } else {
      modalRoot.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restaura el scroll cuando el modal está cerrado
    }

    return () => {
      document.body.style.overflow = 'auto'; // Asegura que el scroll se restaure si el componente se desmonta
    };
  }, [open, modalRoot]);

  if (!open) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          Cerrar modal
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;