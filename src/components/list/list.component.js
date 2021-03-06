import React, { Component } from 'react';
import './list.component.scss';
import arrayData from './list.data';

export default class List extends Component {
    render() {
        const { children = [] } = this.props;

        const childrenListItems = children.filter(child => {
            const { props } = child;

            return props && props.className === 'list__item';
        });

        return (
            <>
                {children}
                <ul className="list">
                    {childrenListItems}

                    {arrayData.map((listItem, index) => (
                        <li key={index} className="list__item">
                            {listItem}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
