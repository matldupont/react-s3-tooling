import * as React from 'react';

import MainContainer from './main.styled';
import Welcome from '../welcome';
import Description from '../description';
import PriceList from '../price_list';
import Additional from '../additional';
import Gallery from '../gallery';

class Main extends React.Component {
  // state = {
  //   view: 0,
  // }

  componentDidMount = () => {
    window.addEventListener('scroll', (event) => { console.log(event); });
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    console.log(event);
  }

  render() {
    // const { view } = this.state;
    return (
      <div>
        <MainContainer>
          <Welcome />
        </MainContainer>
        <Description />
        <PriceList />
        <Additional />
        <Gallery />
      </div>
    );
  }
}

export default Main;
