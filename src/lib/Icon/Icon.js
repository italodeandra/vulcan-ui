import menu from './icons/menu'

const icons = {
    menu
}

const Icon = ({name}) => (
    icons[name]()
)

export default Icon
