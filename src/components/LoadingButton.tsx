type props = {
    text: string,
    variant: 'primary' | 'secondary' | 'danger',
    loading?: boolean,
    size: 'large' | 'small',
    disabled?: boolean
    action:()=> void
}
export default function LoadingButton({ text, size,disabled, variant, loading, action }: props) {
    
    return <button className={`btn grid place-items-center capitalize disabled:cursor-not-allowed ${variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-danger'} ${size === 'large' ? 'h-12' : 'h-10'}`} onClick={action} disabled={disabled || loading}>
        {loading ? <div className="lds-facebook"><div></div><div></div><div></div></div> :
        <p>{text}</p>}
    </button>
}