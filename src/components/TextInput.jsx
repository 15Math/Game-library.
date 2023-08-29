import propTypes from "prop-types"

TextInput.propTypes = {
    value: propTypes.string,
    setValue: propTypes.func
}

export default function TextInput({value, setValue}){
    return(
        <div>
                <label htmlFor="title">Título:</label>
                <input 
                    type="text" 
                    id="title" 
                    value={value} 
                    onChange={(ev) => setValue(ev.target.value)} 
                />
        </div>
    )
}