import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <input type="date" name="date" placeholder="Date" value=""/>
                <input type="radio" name="mood" placeholder="" value=""/>
                <input type="radio" name="mood" placeholder="" value=""/>
                <input type="radio" name="mood" placeholder="" value=""/>
                <input type="radio" name="mood" placeholder="" value=""/>
                <input type="radio" name="mood" placeholder="" value=""/>
                <input type="text" name="thoughts" placeholder="Thoughts" value=""/>
            </form>
        </div>
    );
};

export default Form;