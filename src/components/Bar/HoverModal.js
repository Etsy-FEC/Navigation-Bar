import React, {Component} from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import Box3 from './Box3';
import Box4 from './Box4';


class HoverModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
    }
}

    onRowHover (i) {
        this.setState({selected: i})
    }

    render () {
        const {data, onOutsideHoverModal, onInsideHoverModal} = this.props;
    return (
        <div 
            className={'navigation-extendBox'}
            onMouseLeave={onOutsideHoverModal}
            onMouseEnter={onInsideHoverModal}
        > 
            <Box1
                data={data}
                onRowHover={this.onRowHover.bind(this)}
            /> 
            <Box2 
                data={data.categories[this.state.selected].box2}

            />
            <Box3
                data={data.categories[this.state.selected].box3} footer={data.categories[this.state.selected].box3Footer}
            />
            <Box4
                data={data.image}
                caption={data.caption}
            />
        </div>
        )
    }
}

export default HoverModal;





