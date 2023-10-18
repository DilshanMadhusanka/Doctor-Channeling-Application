import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.question1}</Accordion.Header>
        <Accordion.Body>
        {props.answer1}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{props.question2}</Accordion.Header>
        <Accordion.Body>
        {props.answer2}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;