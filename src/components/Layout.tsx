import * as React from 'react';

import config from '../config';
import { initGA, logPageView } from '../utils/analytics';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children?: JSX.Element;
}

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

class Layout extends React.Component<Props> {
  public componentDidMount() {
    if (config.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }

  public render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <div className="content">{this.props.children}</div>

          <Footer />
        </div>

        <style jsx>{`
          .wrapper {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(3, 1rf);
            grid-template-rows: 1fr 20fr 1fr;
            grid-template-areas:
              'header header header'
              '. content .'
              'footer footer footer';
            grid-auto-flow: dense;
            width: calc(100vw - 20px);
            height: calc(100vh - 20px);
          }

          @media screen and (min-width: 820px) {
            .wrapper {
              grid-gap: 10px;
              grid-template-areas:
                'header header header'
                'content content content'
                'footer footer footer';

              width: calc(100vw - 40px);
              height: calc(100vh - 40px);
            }
          }

          .content {
            grid-area: content;
            text-align: center;
            align-self: center;
            justify-self: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Layout;
