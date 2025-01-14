import { useSelector } from "react-redux";
import { ToggleTheme } from "./ToggleTheme";

export const Title = () => {
const theme = useSelector(state => state.theme);

  return (
    <div className={`title center ${theme}`}>
        <h1 className="title__name">Эмма Лебедева</h1>
        <p className="title__position">frontend-разработчик</p>
        <ToggleTheme />
    </div>
  )
}
