import React, { Component } from 'react';
import { ModalUI } from './modal.styles';

import { Backdrop } from 'components/UI';

// TODO: I need to refactor this...

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} onClick={this.props.modalClosed} />
        <ModalUI
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </ModalUI>
      </>
    );
  }
}

export default Modal;
