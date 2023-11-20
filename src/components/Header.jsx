import info from "../data/basic-info.json";
import ActionItem from "./ActionItem";

const Header = () => {
    const {name, title, summary} = info;
    return (
        <div className="heading-block">
            <div className="heading-block-name">{name}</div>
            <div className="heading-block-title">{title}</div>
            <div className="heading-block-summary">{summary}</div>
            <div className="heading-block-actions">
                <ActionItem name="ABOUT"/>
                <ActionItem name="EDUCATION"/>
                <ActionItem name="EXPERIENCE"/>
                <ActionItem name="PROJECTS"/>
            </div>
        </div>
    )
}

export default Header;