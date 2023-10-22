import state from "../store"
import { useSnapshot } from 'valtio'

const CustomButton = (props: {type: String, title: String, customStyles: String, handleClick: () => void}) => {
  const snap = useSnapshot(state)
  const generateStyle = (type: String) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff'
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
      style={generateStyle(props.type)}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  )
}

export default CustomButton