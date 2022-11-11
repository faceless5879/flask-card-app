import { Button } from "react-bootstrap";
import { showHideModal } from "../actions/modal";

export default function CreateNewCardBtn(props) {
  const { showState, setShowState } = props;
  return (
    <>
      <Button
        style={{ marginTop: 20 }}
        variant="outline-success"
        onClick={() => {
          showHideModal(showState, setShowState);
        }}
      >
        Create new card
      </Button>
    </>
  );
}
