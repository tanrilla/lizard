import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class Home extends React.Component {

  render() {
    return (
        <div>
            <div>
                <Container fluid>
                <Header as='h2'>Welcome to LIZARD</Header>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis lectus eu laoreet elementum. Cras id fringilla neque, et posuere ex. Sed ac libero dictum, euismod mauris vitae, tincidunt dui. Duis ornare odio ut diam faucibus, a efficitur mi interdum. Donec in nisi commodo massa efficitur sollicitudin vel vel lorem. Vestibulum et dignissim mi, ac facilisis nunc. Praesent blandit quis leo et interdum. Nulla porttitor risus consectetur blandit cursus. Pellentesque eu nisi facilisis, faucibus turpis at, convallis ex. Nullam vel tortor lorem. Curabitur vulputate nisl sem, non vehicula enim molestie imperdiet. Suspendisse scelerisque diam libero, a euismod nibh facilisis ut. Nunc sit amet lectus dignissim, convallis nisi sed, sodales magna. Etiam magna turpis, dictum accumsan mi in, interdum imperdiet massa.
                </p>
                <p>
                Nulla in nulla et felis imperdiet hendrerit at eu lacus. Quisque eu aliquet libero, nec pharetra sapien. Nunc vitae ipsum vulputate quam tristique sagittis. In nibh augue, scelerisque vitae ipsum in, tincidunt eleifend sapien. Aliquam mollis sem consectetur erat interdum tincidunt. Aenean eget metus vitae metus mattis tristique. Nulla et mollis turpis. Nulla urna augue, porta at dolor ornare, mattis ornare ligula. Aenean id maximus leo, at dapibus velit.
                </p>
                </Container>
            </div>
        </div>
    );
  }
    
}

export default Home;