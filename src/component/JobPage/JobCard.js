import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55,
      height: 180,
      width: 286,
      alignSelf:'center'
    },
    button:{
      color: '#000000',
      backgroundColor: '#FED988',
      borderColor: '#FED988',
      marginLeft:'5px'
    }
  }

const JobCard = ({id,
    companyName,
    description,
    buttonLabel,
    buttonLabel2,
    img,
    alt}) => {
    return (
        <Card id={id} style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={img} alt={alt} style={styles.cardImage}/>
                    <Card.Body>
                        <Card.Title>{companyName}</Card.Title>
                        <Card.Text>
                        {description}
                        </Card.Text>
                        
                        <Button variant="primary" style={styles.button} size="lg">{buttonLabel}</Button>
                        <Button variant="primary" style={styles.button} size="lg">{buttonLabel2}</Button>
                        
                    </Card.Body>
                </Card>
    )
}

export default JobCard
