import style from './ModalWindow.module.scss'
import {useState} from "react";

type ModalWindowProps = {
    active: boolean;
    setActive: (arg: boolean) => void;
}
const ModalWindow = ({active, setActive}: ModalWindowProps) => {
    const [register, setRegister] = useState<boolean>(false)
    return (
        <>
            <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
                <div className={active ? `${style.content} ${style.active}` : style.content}
                     onClick={event => event.stopPropagation()}>
                    <div className={style.btn}>
                        <button className="main-btn main-btn--white" onClick={() => setRegister(true)}>Start</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalWindow
