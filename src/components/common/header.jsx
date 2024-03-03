import { Button, ButtonGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ButtonGroupData } from "../../data/register"


const Header = () => {
    return (
        <ButtonGroup aria-label="Basic example">
            {ButtonGroupData?.map((btn, ind) => (
                <Button
                    key={ind}
                    className="route-btn"
                    variant="secondary"
                    size="lg"
                    style={{
                        backgroundColor: btn.path === window.location.pathname ? '#4d4d4d' : '',
                    }}
                >
                    <NavLink
                        key={ind}
                        to={btn.path}
                        className="route-link"
                        activeClassName="active"
                    >
                        <span>
                            {btn?.text}
                        </span>
                    </NavLink>
                </Button>
            ))}

        </ButtonGroup>
    )
}

export default Header