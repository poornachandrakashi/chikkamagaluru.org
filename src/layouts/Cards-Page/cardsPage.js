import React from "react";
import "./cardsPage.css";
import { BsPen } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

window.$tmp = {};
class CardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards: [],
      isEmpty: true,
      isLoading: true,
    };
  }

  async componentDidMount() {
    let Cards = [];
    await fetch(
      "https://chikkamagaluru-1fa59-default-rtdb.firebaseio.com/blog.json"
    )
      .then((res) => res.json())
      .then((data) => (Cards = data));
    console.log(Cards);
    if (Cards === null) {
      this.setState({ isEmpty: true, isLoading: false });
    } else if (Cards.length > 0) {
      this.setState({ Cards: Cards, isEmpty: false, isLoading: false });
    }
  }
  render() {
    let cardItems = this.state.Cards.map((card) => {
      return (
        <Col
          onClick={() => (window.$tmp = card)}
          className="mb-4"
          md="4"
          xs="12"
        >
        <Link to='/blog-detail'>
          <Card className="neumorphic">
            <CardImg
              top
              width="100%"
              className="neumorphic-img"
              src={card.image}
              alt={card.title}
            />
            <CardBody>
              <CardTitle tag="h5" className="text-dark">{card.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                <BsPen /> {card.author}
              </CardSubtitle>
              <CardText className="text-dark">{card.body}</CardText>
              <CardSubtitle tag="h7" className="mb-2 text-muted">
                <MdDateRange /> {card.datentime.slice(4, 15)}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Link>
        </Col>
      );
    });
    return (
      <div className="CardsPage top-margin">
        <div className="container my-4">
          <Row>{cardItems}</Row>
        </div>
      </div>
    );
  }
}

export default CardsPage;
