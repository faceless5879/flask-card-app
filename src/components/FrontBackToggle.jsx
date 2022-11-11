import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { showHideModal } from "../actions/modal";

export default function FrontBackToggle(props) {
  const { showState, setShowState } = props;

  return (
    <ButtonGroup type="radio" name="options">
      <ToggleButton
        variant={showState ? "success" : "secondary"}
        onClick={() => {
          showHideModal(showState, setShowState);
        }}
      >
        Front
      </ToggleButton>
      <ToggleButton
        variant={showState ? "secondary" : "success"}
        onClick={() => {
          showHideModal(showState, setShowState);
        }}
      >
        Back
      </ToggleButton>
    </ButtonGroup>
  );
}
