// import React, { useState } from 'react';
// import './Element.css';

// const Element = () => {
//     const [bucket1, setBucket1] = useState(['Item 1', 'Item 2', 'Item 3']); 
//   const [bucket2, setBucket2] = useState([]); 


//   const handleAddToBucket2 = () => {

//     const selectedItems = bucket1.filter(item => item.selected);
//     setBucket2(prevState => [...prevState, ...selectedItems]);
//     setBucket1(prevState => prevState.filter(item => !item.selected));
//   };

//   const handleAddAllToBucket2 = () => {

//     setBucket2(prevState => [...prevState, ...bucket1]);
//     setBucket1([]);
//   };

//   const handleRemoveFromBucket2 = () => {

//     const selectedItems = bucket2.filter(item => item.selected);
//     setBucket1(prevState => [...prevState, ...selectedItems]);
//     setBucket2(prevState => prevState.filter(item => !item.selected));
//   };

//   const handleRemoveAllFromBucket2 = () => {

//     setBucket1(prevState => [...prevState, ...bucket2]);
//     setBucket2([]);
//   };

//   const handleToggleSelection = (item, bucket) => {

//     if (bucket === 'bucket1') {
//       setBucket1(prevState =>
//         prevState.map(i =>
//           i === item ? { ...i, selected: !i.selected } : i
//         )
//       );
//     } else if (bucket === 'bucket2') {
//       setBucket2(prevState =>
//         prevState.map(i =>
//           i === item ? { ...i, selected: !i.selected } : i
//         )
//       );
//     }
//   };


//   return (
//     <div >
//     <div>
//       <h3>Bucket 1</h3>
//       <ul>
//         {bucket1.map(item => (
//           <li key={item}>
//             <input
//               type="checkbox"
//               onChange={() => handleToggleSelection(item, 'bucket1')}
//               checked={item.selected || false}
//             />
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//     <div>
//       <button onClick={handleAddToBucket2}>Add Selected to Bucket 2</button>
//       <button onClick={handleAddAllToBucket2}>Add All to Bucket 2</button>
//       <button onClick={handleRemoveFromBucket2}>Remove Selected from Bucket 2</button>
//       <button onClick={handleRemoveAllFromBucket2}>Remove All from Bucket 2</button>
//     </div>
//     <div>
//       <h3>Bucket 2</h3>
//       <ul>
//         {bucket2.map(item => (
//           <li key={item}>
//             <input
//               type="checkbox"
//               onChange={() => handleToggleSelection(item, 'bucket2')}
//               checked={item.selected || false}
//             />
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
//   )
// }

// export default Element






import React, { useState } from 'react';
import './Element.css';
import Navbar from './Navbar';

const Element = () => {
    const [bucket1, setBucket1] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 5'].map(item => ({ name: item, selected: false })));
    const [bucket2, setBucket2] = useState(['Item 4', 'Item 6'].map(item => ({ name: item, selected: false })));

    const handleAddToBucket2 = () => {
        const selectedItems = bucket1.filter(item => item.selected);
        setBucket2(prevState => [...prevState, ...selectedItems]);
        setBucket1(prevState => prevState.filter(item => !item.selected));
    };



    const handleAddAllToBucket2 = () => {
        setBucket2(prevState => [...prevState, ...bucket1]);
        setBucket1([]);
    };

    const handleRemoveFromBucket2 = () => {
        const selectedItems = bucket2.filter(item => item.selected);
        setBucket1(prevState => [...prevState, ...selectedItems]);
        setBucket2(prevState => prevState.filter(item => !item.selected));
    };

    const handleRemoveAllFromBucket2 = () => {
        setBucket1(prevState => [...prevState, ...bucket2]);
        setBucket2([]);
    };

    const handleToggleSelection = (item, bucket) => {
        if (bucket === 'bucket1') {
            setBucket1(prevState =>
                prevState.map(i =>
                    i === item ? { ...i, selected: !i.selected } : i
                )
            );
        } else if (bucket === 'bucket2') {
            setBucket2(prevState =>
                prevState.map(i =>
                    i === item ? { ...i, selected: !i.selected } : i
                )
            );
        }
    };

    return (
        <Navbar>
            <div>
                <div className="container">
                    {/* <div className="bucket1">
                    <h3>Bucket 1</h3>
                    <ul>
                        {bucket1.map(item => (
                            <li key={item.name} className={item.selected ? "selected" : ""}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleToggleSelection(item, 'bucket1')}
                                    checked={item.selected}
                                />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div> */}




                    {/* <div className="bucket1">
                        <h3>Bucket 1</h3>
                        {bucket1.map(item => (
                            <button
                                key={item.name}
                                className={item.selected ? "selected" : ""}
                                onClick={() => handleToggleSelection(item, 'bucket1')}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div> */}

<div className="bucket1">
    <h3 className='num'>Bucket 1</h3>
    {bucket1.map(item => (
        <button
            key={item.name}
            className={`${item.name === 'Item 1','Item 2','Item 3','Item 5' ? 'special-button' : ''} ${item.selected ? 'selected' : ''}`}
            onClick={() => handleToggleSelection(item, 'bucket1')}
        >
            {item.name}
        </button>
    ))}
</div>





                    <div className="actions">
                        <button onClick={handleAddToBucket2} className='add'>Add</button>
                        <button onClick={handleRemoveFromBucket2} className='remove'>Remove</button>
                        <button onClick={handleAddAllToBucket2} className='addall'>Add All</button>
                        <button onClick={handleRemoveAllFromBucket2} className='removeall'>Remove All</button>
                    </div>
                    {/* <div className="bucket2">
                    <h3>Bucket 2</h3>
                    <ul>
                        {bucket2.map(item => (
                            <li key={item.name} className={item.selected ? "selected" : ""}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleToggleSelection(item, 'bucket2')}
                                    checked={item.selected}
                                />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div> */}





                    {/* <div className="bucket2">
                        <h3>Bucket 2</h3>
                        {bucket2.map(item => (
                            <button

                                key={item.name}
                                className={item.selected ? "selected" : ""}
                                onClick={() => handleToggleSelection(item, 'bucket2')}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div> */}


<div className="bucket2">
    <h3 className='num'>Bucket 2</h3>
    {bucket2.map(item => (
        <button
            key={item.name}
            className={`${item.name === 'Item 4','Item 6' ? 'special-button' : ''} ${item.selected ? 'selected' : ''}`}
            onClick={() => handleToggleSelection(item, 'bucket2')}
        >
            {item.name}
        </button>
    ))}
</div>


                </div>
            </div>
        </Navbar>
    )
}

export default Element;
