import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    cardImage: {
      objectFit: 'cover',
      borderRadius: "0px 0px 15px 15px",
      height: 180,
      width: 400,
      alignSelf:'center'
    }
}

const EventCard = ({id,
    title,
    description,
    img,
    alt}) => {
    return (    
        <Card style={{ width: '25rem', borderRadius: "15px" }}>
        <Card.Body>
            <Card.Title><b>{title}</b></Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={img} alt={alt} style={styles.cardImage}/>
        </Card>

    ) 
}

export default EventCard
