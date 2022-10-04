import React, {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Dialog, ModalHeader, ModalWrapper } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "../Tooltip";
import Backdrop from "./components/Backdrop";

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  modalTitle,
  modalTitleTooltipContent,
  setModalOpen,
}) => {
  return (
    <Backdrop>
      {isOpen && (
        <ModalWrapper>
          <ModalHeader>
            <div>
              <Heading headingLevel='h2'>{modalTitle}</Heading>
              {modalTitleTooltipContent && (
                <Tooltip content={modalTitleTooltipContent}>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </Tooltip>
              )}
            </div>
            <Tooltip content='Close'>
              <div>
                <Button
                  aria-label='Close button'
                  type='button'
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                  variant='icon'
                >
                  <FontAwesomeIcon icon={faXmark} />
                </Button>
              </div>
            </Tooltip>
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
  modalTitleTooltipContent?: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default Modal;
