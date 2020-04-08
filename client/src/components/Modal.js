import React, {Component} from 'react';
import ReactDom from 'react-dom';
import history from "../history";
class Modal extends Component {
    render() {
        return ReactDom.createPortal(
            <div onClick={this.props.onDissmis} className="ui dimmer modals visible active">
                <div onClick={(e) => e.stopPropagation() } className="ui standard modal visible active">
                    <div className="header">{this.props.title}</div>
                    <div className="content">{this.props.content}</div>
                    <div className="actions">
                        {this.props.actions}
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

export default Modal;
