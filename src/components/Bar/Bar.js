import React, {Component} from 'react';
import HoverModal from './HoverModal';
import NavBar from './NavBar';


class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: null,
            generate: 
            [
                {
                    header: 'All Jewelry & Accessories',
                    image: '/gryffindor.jpg',
                    caption: 'Ear Wax',
                    footer: 'More stuff',
                    categories: [
                        {title: 'Accessories', 
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff'                
                    },
                        {title: 'Bags & Purses',
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff' },
                        {title: 'Necklaces',
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff' },
                        {title: 'Rings',
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff' },
                        {title: 'Earrings',
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff' },
                        {title: 'Bracelets',
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff' },
                        {title: 'Body Jewelry',
                        box2: [
                            {title: '1a', main: true},
                            {title: '2a', main: true},
                            {title: '3a', main: false},
                            {title: '4a', main: false},
                            {title: '5a', main: true},
                            {title: '6a', main: true},
                            {title: '7a', main: true},
                        ],
                        box3: [
                            {title: '1b', main: true},
                            {title: '2b', main: true},
                            {title: '3b', main: true},
                            {title: '4b', main: true},
                            {title: '5b', main: false},
                        ],
                        box3Footer: 'stuuuuuff' }
                    ],
                },
                {
                    header: 'Different',
                    image: '/slytherin.jpg',
                    caption: 'Snake Oil',
                    categories: [
                        {title: '2', box2: '1a', box3: '1b'},
                        {title: 'Bags & Purses', box2: '2a', box3: '2b'},
                        {title: 'Necklaces', box2: '3a', box3: '3b'},
                        {title: 'Rings', box2: '4a', box3: '4b'},
                        {title: 'Earrings', box2: '5a', box3: '5b'},
                        {title: 'Bracelets', box2: '6a', box3: '6b'},
                        {title: 'Body Jewelry', box2: '7a', box3: '7b'}
                    ]
                },
                {
                    header: 'Also differnt',
                    image: '/ravenclaw.jpg',
                    caption: 'Bookmarks',
                    categories: [
                        {title: '3', box2: '1a', box3: '1b'},
                        {title: 'Bags & Purses', box2: '2a', box3: '2b'},
                        {title: 'Necklaces', box2: '3a', box3: '3b'},
                        {title: 'Rings', box2: '4a', box3: '4b'},
                        {title: 'Earrings', box2: '5a', box3: '5b'},
                        {title: 'Bracelets', box2: '6a', box3: '6b'},
                        {title: 'Body Jewelry', box2: '7a', box3: '7b'}
                    ]
                },
                {
                    header: 'Still different',
                    image: '/hufflepuff.jpg',
                    caption: 'Scarf',
                    categories: [
                        {title: '4', box2: '1a', box3: '1b'},
                        {title: 'Bags & Purses', box2: '2a', box3: '2b'},
                        {title: 'Necklaces', box2: '3a', box3: '3b'},
                        {title: 'Rings', box2: '4a', box3: '4b'},
                        {title: 'Earrings', box2: '5a', box3: '5b'},
                        {title: 'Bracelets', box2: '6a', box3: '6b'},
                        {title: 'Body Jewelry', box2: '7a', box3: '7b'}
                    ]
                }
            ],
            insideHoverModal: false,
            insideNavBar: false,
          }
        
}

    onSelect (i) {
        this.setState({currentTab: this.state.generate[i]})
    }

    onOutsideHoverModal () {
        Promise.resolve(this.setState({insideHoverModal: false})).then( val => {
        if (!this.state.insideNavBar) {
            this.setState({currentTab:null})
        }})
    }

    onOutsideNavBar (e) {
        Promise.resolve(this.setState({insideNavBar: false})).then( val => {
        if (!this.state.insideHoverModal) {
            this.setState({currentTab:null})
         } })
    }

    onInsideHoverModal () {
        this.setState({insideHoverModal: true})
    }

    onInsideNavBar () {
        this.setState({insideNavBar: true})
    }

    render () {
        if (this.state.currentTab === null) {
            return (
                <div>
                <NavBar
                     onSelect={this.onSelect.bind(this)}
                     onOutsideNavBar={this.onOutsideNavBar.bind(this)}
                     onInsideNavBar={this.onInsideNavBar.bind(this)}
                />      
            </div> 
            )
        } else {
        return (
                <div>
                    <NavBar
                        onSelect={this.onSelect.bind(this)}
                        onOutsideNavBar={this.onOutsideNavBar.bind(this)}
                        onInsideNavBar={this.onInsideNavBar.bind(this)}
                    />
                    {
                    <HoverModal
                        data={this.state.currentTab}
                        onOutsideHoverModal={this.onOutsideHoverModal.bind(this)}
                        onInsideHoverModal={this.onInsideHoverModal.bind(this)}
                    />
                    }       
                </div> 
                )       
        }
    }
}

export default Bar;