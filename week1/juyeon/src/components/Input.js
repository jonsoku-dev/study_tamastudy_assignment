import React from 'react';

const Input = ({ value, onChange, onInsert }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    };

    return (
        <div >
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <button  > = </button>
            <div onClick={onInsert}>추가</div>
        </div>
    )

};

export default Input;