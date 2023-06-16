import style from '../ModalWindow.module.scss'

const RegistrationWindow = () => {
    return (
        <div className={style.wrap}>
            <form action="" className={style.form}>
                <input className={style.field} type="text" placeholder='Enter your mail'/>
                <input className={style.field} type='text' placeholder='Enter your name'/>
            </form>
        </div>
    )

}
export default RegistrationWindow
