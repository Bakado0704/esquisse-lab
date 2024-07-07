import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const initialValue = null;

export const modalImageContext = createContext<{
  modalImage: string | null;
  setModalImage: Dispatch<SetStateAction<string | null>>;
}>({
  modalImage: initialValue,
  setModalImage: () => {},
});

export const useModalImageContext = () => {
  const context = useContext(modalImageContext);

  if (!context) {
    throw new Error(
      'useModalImageContext must be used within a ModalImageProvider',
    );
  }

  const initModalImage = () => {
    context.setModalImage(initialValue);
  };

  return { ...context, initModalImage };
};

export const ModalImageProvider = ({ children }: { children: ReactNode }) => {
  const [modalImage, setModalImage] = useState<string | null>(initialValue);

  const value = {
    modalImage,
    setModalImage,
  };

  return (
    <modalImageContext.Provider value={value}>
      {children}
    </modalImageContext.Provider>
  );
};
