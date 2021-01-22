import React from "react";
import "./cardsPage.css";
import { BsPen } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Redirect } from "react-router-dom";
import Hero from "../../shared-components/Hero Section - Mobile Friendly/Hero";

class CardsDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cards: [],
      isEmpty: true,
      isLoading: true,
    };
  }

  render() {
      
    if(typeof window.$tmp === 'undefined'){
        console.log("yes")
        return <Redirect to="/blog"/>
    }
    return (
      <div className="CardsDetailPage">
        <Hero />
        <div className="container my-4">
          <h1>{window.$tmp.title}</h1>
          <h3>
            <BsPen /> {window.$tmp.author}
          </h3>
          <h4>
            <MdDateRange /> {window.$tmp.datentime.slice(4, 15)}
          </h4>
          <p>{window.$tmp.body}</p>
        </div>
      </div>
    );
  }
}

export default CardsDetailPage;
