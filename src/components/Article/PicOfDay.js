import React, { useState } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Collapse } from 'reactstrap';
import styled from '../../../node_modules/styled-components'



const POD= (props) => {
  const [close, setClose] = useState(false);

  return (
    <div>
      <Card>
        <h2>Astronomy Picture of the Day</h2>
        <CardText>{props.date}</CardText>
        <CardImg top width="100%" src={props.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h3>{props.title}</h3>
          </CardTitle>
          <Button onClick = {() => setClose(!close)}>Press Me!</Button>
          <Collapse isOpen={close}>
            <CardText>{props.explanation}</CardText>
            <CardText>
              <small className="text-muted">{props.copyright}</small>
            </CardText>
          </Collapse>
        </CardBody>
        
      </Card>
    </div>
  );
};

export default POD;