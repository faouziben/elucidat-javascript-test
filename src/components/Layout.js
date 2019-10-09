import * as React from 'react';
import NavMenu from './NavMenu';


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {

 
      return <div >
        <div id="wrapper">
          <NavMenu />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <hr />
              <div className="container-fluid">
                {this.props.children}
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Elucidat 2019</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
        
      </div>
  
  };
}

