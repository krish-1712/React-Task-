import React, { useState } from 'react';
import './NestedList.css';
import Navbar from './Navbar';

const GrandChild = ({ name }) => {
    return <li>{name}</li>;
};

const Child = ({ name, grandchildren }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li onClick={handleClick} className={isOpen ? 'child-open' : ''}>
            {name}
            {isOpen && (
                <ul>
                    {grandchildren && grandchildren.map((grandchild, index) => (
                        <GrandChild key={index} name={grandchild} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const Parent = ({ name, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`parent ${name === 'Users' && isOpen ? 'users-open' : ''}`}>
            <h2 onClick={handleClick}>{name}</h2>
            {isOpen && (
                <ul>
                    {children && children.map((child, index) => (
                        <Child key={index} name={child.name} grandchildren={child.grandchildren} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const NestedList = () => {
    const [parents, setParents] = useState([
        {
            name: 'Applications',
            children: []
        },
        {
            name: 'Library',
            children: []
        },
        {
            name: 'System',
            children: []
        },
        {
            name: 'Users',
            children: [
                {
                    name: 'adam',
                    grandchildren: []
                },
                {
                    name: 'ghost',
                    grandchildren: []
                },

                {
                    name: 'Shared',
                    grandchildren: []
                },
                {
                    name: 'thing 1',
                    grandchildren: []
                },
                {
                    name: 'things 2',
                    grandchildren: []
                },
                {
                    name: 'Tonyae',
                    grandchildren: []
                },
                {
                    name: 'guest',
                    grandchildren: ['Desktop', 'Documents', 'Downloads', 'Movies', 'Music', 'Pictures', 'Public']
                },
            ]
        }
    ]);

    return (
        <Navbar>
            <div className='container'>
                <ul>
                    {parents.map((parent, index) => (
                        <Parent key={index} name={parent.name} children={parent.children} />
                    ))}
                </ul>
            </div>
        </Navbar>
    );
};

export default NestedList;
