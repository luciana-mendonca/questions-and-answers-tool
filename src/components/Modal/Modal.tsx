import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Dialog, ModalHeader, ModalWrapper } from "./components";
import Backdrop from "./components/Backdrop";

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  modalTitle,
  setModalOpen,
}) => {
  return (
    <Backdrop>
      {isOpen && (
        <ModalWrapper>
          <ModalHeader>
            <div>
              <Heading headingLevel='h2'>{modalTitle}</Heading>
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
            <div>
              <Button
                aria-label='Close button'
                type='button'
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                variant='icon'
              >
                Close
              </Button>
            </div>
          </ModalHeader>
          <Dialog>{children}</Dialog>
        </ModalWrapper>
      )}
    </Backdrop>
  );
};

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  modalTitle: ReactNode;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default Modal;
