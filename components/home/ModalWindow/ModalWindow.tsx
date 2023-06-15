import style from './ModalWindow.module.scss'


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ModalWindow = ({active, setActive}) => {
    return (
        <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
            <div className={active ? `${style.content} ${style.active}` : style.content}
                 onClick={event => event.stopPropagation()}>
            </div>
        </div>
    )
}
export default ModalWindow
