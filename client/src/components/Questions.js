import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is eChannelling ?</Accordion.Header>
        <Accordion.Body>
        eChannelling is a service that offers convenient booking facilities for Doctor Appointments at island wide prominent hospitals in Sri Lanka. eChannelling has a network of over 200 hospitals with more than 5,500 doctors around the country.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. How to book an appointment with a doctor?</Accordion.Header>
        <Accordion.Body>
        Select the preferred date (required session) of the doctor Enter patient details Select the preferred payment method and proceed. You have maximum of 15 minutes to complete the transaction before expiring the appointment.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;