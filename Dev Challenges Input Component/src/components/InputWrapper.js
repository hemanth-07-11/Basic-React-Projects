import './_inputWrapper.scss'

import Input from "./Input"

const InputWrapper = ({value, helperText, placeHolderText, hover, focus, startIcon, endIcon, size, fullWidth, label, multiline, row, error, disabled}) => {

    return (
        <div className={`inputWrapper ${fullWidth ? 'inputWrapper--full' : ''}`} >
            <p className={`inputWrapper__description${hover || focus ? '--pseudoclass' : ''}`}>
                {hover ? '&:hover' : (focus ? '&:focus' : (
                    `<Input ${helperText ? `helperText="${helperText}"` : ''}
                    ${value ? `value="${value}"` : ''}
                    ${startIcon ? 'startIcon' : (endIcon ? 'endIcon': '')}
                    ${size ? `size="${size}"` : ''}
                    ${fullWidth ? 'fullWidth' : ''}
                    ${label ? `label="${label}'` : ''}
                    ${multiline ? `multiline${row ? ` row="${row}"` : ''}` : ''}
                    ${error ? 'error' : ''}
                    ${disabled ? 'disabled' : ''} />`
                ))}
            </p>
            <Input value={value} placeHolder={placeHolderText} helperText={helperText} hover={hover} focus={focus} startIcon={startIcon} endIcon={endIcon} size={size} fullWidth={fullWidth} label={label} multiline={multiline} row={row} error={error} disabled={disabled} />
        </div>
    )
}

InputWrapper.defaultProps = {
    label: 'Label',
    placeHolderText: 'Placeholder',
}

export default InputWrapper