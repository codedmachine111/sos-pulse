import './Button.scss';

export const Button = (props)=>{
    return(
        <>
            <button className='btn' id={props.id} onClick={props.onClick} onSubmit={props.onSubmit} type={props.type}>{props.title}</button>
        </>
    )
}