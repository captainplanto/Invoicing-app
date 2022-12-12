import { Modal, Button } from "@nextui-org/react";
import { FC, ReactNode, useState } from "react";

interface IModal {
  children: ReactNode;
}
export const ModalComponent: FC<IModal> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto flat color="error" onClick={handler}>
        Open modal
      </Button>
      <Modal  open={visible} onClose={closeHandler} >
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};
