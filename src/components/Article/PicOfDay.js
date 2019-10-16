import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Collapse } from 'reactstrap';
import styled from '../../../node_modules/styled-components'

const RandomBtn = styled.button`
    border: none;
    margin: 20px 0;
    border-radius: 5px;
    padding: 8px;
    background: rgb(108,117,125);
    color: white;
`

const POD= (props) => {
  const [close, setClose] = useState(false);

  return (
    <div>
      <Card style={{border:'1px solid rgb(108,117,125)', marginBottom:'10px'}}>
        <h2>Astronomy Picture of the Day</h2>
        <CardText>{props.date}</CardText>
        <CardImg top width="100%" height="50%" src={props.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h3>{props.title}</h3>
          </CardTitle>
          <RandomBtn style={{outline:'none'}} onClick = {() => setClose(!close)}>{!close ?
          'Read More':'Collapse'}</RandomBtn>
          <Collapse isOpen={close}>
            <CardText style={{marginTop:'10px'}}>{props.explanation}</CardText>
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