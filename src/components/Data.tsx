type ButtonProps = {
    onClick: () => void
}
function Button({onClick}: ButtonProps){
    return(
        <button onClick={onClick} className="bg-slate-400 rounded-xl px-2 py-2">click me</button>
    );
}
export default Button;