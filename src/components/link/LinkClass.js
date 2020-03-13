import React, {Component} from "react";

export default class Link extends Component {
    state = {
        links: []
    };

    componentDidMount() {
        const linkData = {href: "/", text: "link", id: 10};
        const links = [];

        setInterval(() => {
            if (links.length > 5) {
                this.setState({
                    links: [
                        {href: "/", text: "link", id: 40},
                        {href: "/", text: "link", id: 41},
                        {href: "/", text: "link", id: 42}
                    ]
                });
            } else {
                const id = linkData.id = ++linkData.id;
                const newLinkData = {...linkData, id};

                links.push(newLinkData);

                const newLinks = [...links];

                this.setState({
                    links: newLinks
                });
            }
        }, 3000);
    }

    render() {
        const {links} = this.state;

        console.log(links);

        return (
            links.map((link, index) => {

                return (
                    <div key={link.id}>
                        <Link {...link} />
                    </div>
                );

            })
        );

    }
}
