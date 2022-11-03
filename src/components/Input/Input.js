import './Input.scss';

export const Input = (props)=>{

    return(
        <div className="input-container">
            <input type="text" placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}