import { Button } from "react-bootstrap";

export default function CreateNewCardBtn(props) {
  const { handleShow } = props;
  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Create new card
      </Button>
    </>
  );
}
