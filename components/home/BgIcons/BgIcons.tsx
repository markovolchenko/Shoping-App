import {StarItem} from "../../../data/bgIcons/bg-icons.data";


type BgIconsProps = {
    stars:StarItem[];
}

const BgIcons = ({stars}:BgIconsProps) => {
    return (
        <>
            {
                stars.map(item => (
                <img key={item.id} src={item.icon} alt="star"/>
            ))
            }
        </>
    )
}

export default BgIcons