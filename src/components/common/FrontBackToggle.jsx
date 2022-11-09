import { ToggleButton, ButtonGroup } from "react-bootstrap";

export default function FrontBackToggle(props) {
  const { showCardFront, handleShowFrontBack } = props;

  return (
    <ButtonGroup type="radio" name="options">
      <ToggleButton
        variant={showCardFront ? "success" : "secondary"}
        onClick={handleShowFrontBack}
      >
        Front
      </ToggleButton>
      <ToggleButton
        variant={showCardFront ? "secondary" : "success"}
        onClick={handleShowFrontBack}
      >
        Back
      </ToggleButton>
    </ButtonGroup>
  );
}
