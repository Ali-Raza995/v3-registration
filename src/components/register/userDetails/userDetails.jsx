import {
    userDetailsSection,
    userDetailsSection2,
} from "../../../data/register";
import InputFieldsSection from "../../common/inputFieldsSection";

const UserDetails = () => {
    return (
        <>
            <h1 className="heading">Kundeopplysninger</h1>
            <div className="register-content user-contact">
                <div className="_section">
                    <InputFieldsSection inputFields={userDetailsSection} />
                </div>
                <InputFieldsSection inputFields={userDetailsSection2} />
                <div />
            </div>
        </>
    );
};

export default UserDetails;
