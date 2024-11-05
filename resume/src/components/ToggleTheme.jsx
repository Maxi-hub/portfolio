import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/ThemeSlice";


export const ToggleTheme = () => {
    const dispatch = useDispatch();

const handleClick = () => {
    dispatch(toggleTheme());
}

  return (
    <button onClick={handleClick}>
        Сменить тему
    </button>
  )
}
