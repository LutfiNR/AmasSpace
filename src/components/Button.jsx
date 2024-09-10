const variants={
    primary:{
        bg:'accent',
        color:'text-slate-50',
        border:'border-none',
    },
    secondaryOutline:{
        bg:'slate-50',
        color:'text-primary',
        border:'border border-primary',
    }

}

const Button = ({children,variant, size}) =>{
    return(
        <button className={`bg-${variants[variant].bg} ${variants[variant].color} ${variants[variant].border} ${size} rounded-lg`}>
            {children}
        </button>
    )
}

export default Button;