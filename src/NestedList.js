// import React, { useState } from 'react';
// import './NestedList.css'

// const TreeNode = ({ node }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div onClick={handleClick} style={{ cursor: 'pointer' }}>
//         {node.name}
//       </div>
//       {isOpen && (
//         <div style={{ marginLeft: '20px' }}>
//           {node.children && node.children.map(child => (
//             <TreeNode key={child.name} node={child} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const NestedList = () => {
//   // Sample data structure representing the tree
//   const treeData = [
//     {
//       name: 'Applications',
//       children: [
//         { name: 'Library' },
//         {
//           name: 'System',
//           children: [
//             { name: 'Users', children: [
//               { name: 'adam' },
//               { name: 'ghost' },
//               { name: 'Guest', children: [
//                 { name: 'Desktop' },
//                 { name: 'Documents', children: [
//                   { name: 'Downloads' },
//                   { name: 'Movies' },
//                   { name: 'Music' },
//                   { name: 'Pictures' },
//                   { name: 'Public' }
//                 ]}
//               ]}
//             ]}
//           ]
//         }
//       ]
//     }
//   ];

//   return (
//     <div>
//       {treeData.map(root => (
//         <TreeNode key={root.name} node={root} />
//       ))}
//     </div>
//   );
// };

// export default NestedList;




// import React, { useState } from 'react';
// import './NestedList.css';
// import Navbar from './Navbar';

// const TreeNode = ({ node }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className='line'>
//         <div className={`tree-node ${node.children ? 'has-children' : ''}`}>
//             <div className="node-name" onClick={handleClick}>
//                 {node.name}
//             </div>
//             {isOpen && node.children && (
//                 <div className="children">
//                     {node.children.map(child => (
//                         <TreeNode key={child.name} node={child} />
//                     ))}
//                 </div>
//             )}
//         </div>
//         </div>
//     );
// };

// const NestedList = () => {
//     // Sample data structure representing the tree
//     const treeData = [
//         {
//             name: 'Applications',
//             children: [
//                 { name: 'Library' },
//                 {
//                     name: 'System',
//                     children: [
//                         {
//                             name: 'Users',
//                             children: [
//                                 { name: 'adam' },
//                                 { name: 'ghost' },
//                                 {
//                                     name: 'guest',
//                                     children: [
//                                         { name: 'Desktop' },
//                                         {
//                                             name: 'Documents', children: [
//                                                 { name: 'Downloads' },
//                                                 { name: 'Movies' },
//                                                 { name: 'Music' },
//                                                 { name: 'Pictures' },
//                                                 { name: 'Public' }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ];

//     return (
//         <Navbar>
//         <div className="nested-list-container">
//             {treeData.map(root => (
//                 <TreeNode key={root.name} node={root} />
//             ))}
//         </div>
//         </Navbar>
//     );
// };

// export default NestedList;







// import React, { useState } from 'react';
// import './NestedList.css';

// // Grandchild component
// const GrandChild = ({ name }) => {
//     return <li>{name}</li>;
// };

// // Child component
// const Child = ({ name, grandchildren }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//             <li onClick={handleClick}>{name}</li>
//             {isOpen && (
//                 <ul>
//                     {grandchildren && grandchildren.map((grandchild, index) => (
//                         <GrandChild key={index} name={grandchild} />
//                     ))}
//                 </ul>
//             )}
//         </>
//     );
// };

// // Parent component
// const Parent = ({ name, children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//             <h2 onClick={handleClick}>{name}</h2>
//             {isOpen && (
//                 <ul>
//                     {children && children.map((child, index) => (
//                         <Child key={index} name={child.name} grandchildren={child.grandchildren} />
//                     ))}
//                 </ul>
//             )}
//         </>
//     );
// };

// // Main App component
// const NestedList = () => {
//     const [parents, setParents] = useState([
//         {
//             name: 'Applications',
//             children: []
//         },
//         {
//             name: 'Library',
//             children: []
//         },
//         {
//             name: 'System',
//             children: []
//         },
//         {
//             name: 'Users',
//             children: [
//                 {
//                     name: 'adam',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'ghost',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'guest',
//                     grandchildren: ['Desktop', 'Documents', 'Downloads', 'Movies', 'Music', 'Pictures', 'Public']
//                 },
//                 {
//                     name: 'Shared',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'thing 1',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'things 2',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'Tonyae',
//                     grandchildren: []
//                 }
//             ]
//         }
//     ]);

//     return (
//         <div className='container'>

//             <ul>
//                 {parents.map((parent, index) => (
//                     <Parent key={index} name={parent.name} children={parent.children} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NestedList;






// NestedList.js

// import React, { useState } from 'react';
// import './NestedList.css';

// // Grandchild component
// const GrandChild = ({ name }) => {
//     return <li>{name}</li>;
// };

// // Child component
// const Child = ({ name, grandchildren }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
       
//             <li onClick={handleClick} >{name}</li>
//             {isOpen && (
                
//                 <ul >
//                     {grandchildren && grandchildren.map((grandchild, index) => (
//                         <GrandChild key={index} name={grandchild}  />
//                     ))}
//                 </ul>
//             )}
       
//         </>
//     );
// };

// // Parent component
// const Parent = ({ name, children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className={`parent ${name === 'Users' && isOpen ? 'users-open' : ''}`}>
//             <h2 onClick={handleClick}>{name}</h2>
//             {isOpen && (
//                 <ul>
//                     {children && children.map((child, index) => (
//                         <Child key={index} name={child.name} grandchildren={child.grandchildren} />
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// // Main App component
// const NestedList = () => {
//     const [parents, setParents] = useState([
//         {
//             name: 'Applications',
//             children: []
//         },
//         {
//             name: 'Library',
//             children: []
//         },
//         {
//             name: 'System',
//             children: []
//         },
//         {
//             name: 'Users',
//             children: [
//                 {
//                     name: 'adam',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'ghost',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'guest',
//                     grandchildren: ['Desktop', 'Documents', 'Downloads', 'Movies', 'Music', 'Pictures', 'Public']
//                 },
//                 {
//                     name: 'Shared',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'thing 1',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'things 2',
//                     grandchildren: []
//                 },
//                 {
//                     name: 'Tonyae',
//                     grandchildren: []
//                 }
//             ]
//         }
//     ]);

//     return (
//         <div className='container'>
//             <ul>
//                 {parents.map((parent, index) => (
//                     <Parent key={index} name={parent.name} children={parent.children} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NestedList;











// NestedList.js

import React, { useState } from 'react';
import './NestedList.css';
import Navbar from './Navbar';

// Grandchild component
const GrandChild = ({ name }) => {
    return <li>{name}</li>;
};

// Child component
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

// Parent component
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

// Main App component
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
