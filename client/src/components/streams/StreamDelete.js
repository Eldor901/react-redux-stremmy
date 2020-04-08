import React, {Component} from 'react';
import Modal from "../Modal";
import history from "../../history";
import {connect} from "react-redux";
import {fetchStream} from "../../actions";
import {DeleteStream} from "../../actions";
import {Link} from "react-router-dom";


class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }


    renderContent()
    {
        if(!this.props.stream)
        {
            return  'Are you sure you want to delete this stream'
        }

        return `Are you sure you want to delete  with title: ${this.props.stream.title}`
    }

    render() {
        console.log(this.props.match.params.id);
        const actions = (<>
                <button onClick={() => this.props.DeleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
                <Link onClick={()=>history.push('/')} className="ui button">Cancle</Link>
            </>
        );

        return (
            <div>
                <Modal title="Delete Stream"
                       content={this.renderContent()}
                       actions={actions}
                       onDissmis={() => history.push('/')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {stream: state.streams[ownProps.match.params.id]}
};


export default connect(mapStateToProps, {
    fetchStream,
    DeleteStream
})(StreamDelete);
