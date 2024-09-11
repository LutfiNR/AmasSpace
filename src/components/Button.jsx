const variants={
    primary:{
        bg:'accent',
        color:'text-slate-50',
        border:'border-none',
    },
    secondary:{
        bg:'primary',
        color:'text-slate-50',
        border:'border-none',
    },
    secondaryOutline:{
        bg:'none',
        color:'text-primary',
        border:'border border-primary',
    },
    whiteOutline:{
        bg:'none',
        color:'text-slate-50',
        border:'border border-slate-50',
    }

}

const Button = ({children,variant, size,href}) =>{
    return(
        <a href={href}>
            <button className={`bg-${variants[variant].bg} ${variants[variant].color} ${variants[variant].border} ${size} rounded-lg`}>
            {children}
        </button>
        </a>
    )
}

export default Button;