import { Modal, Button } from "@nextui-org/react";
import { FC, ReactNode, useState } from "react";

interface IModal {
  children: ReactNode;
  button:ReactNode;
}
export const ModalComponent: FC<IModal> = ({ children, button }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
     <div onClick={handler}>{button}</div>
      <Modal  open={visible} onClose={closeHandler} >
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};
