type props = {
    text: string,
    variant: 'primary' | 'secondary' | 'danger',
    loading?: boolean,
    size:'large' | 'small'
    action:()=> void
}
export default function LoadingButton({ text, size, variant, loading, action }: props) {
    
    return <button className={`body-m grid place-items-center capitalize ${variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-danger'} ${size === 'large' ? 'h-12' : 'h-10'}`} onClick={action}>
        {loading ? <div className="lds-facebook"><div></div><div></div><div></div></div> :
        <p>{text}</p>}
    </button>
}