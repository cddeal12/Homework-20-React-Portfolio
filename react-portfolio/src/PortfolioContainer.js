import React, { Component } from "react";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./Components/Footer";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default PortfolioContainer;
