import { Button } from "react-bootstrap";

import CommonButton from "../common/commonButton";

const UserCrud = () => {
  return (
    <div className="_userCrud-parent">
      <div className="_header-wrapper">
        <div className="_counter">
          <p>
            Hjulsett <br /> 1
          </p>
          <p>
            Hjulsett <br /> 1
          </p>
        </div>

        <div className="_box-wrapper">
          <p className="_firstChild">Ingen skader</p>
        </div>

        <div className="_yellow-box-wrapper">
          <p>Til skadekontr oll</p>
        </div>
        <div className="_grey-box-wrapper">
          <img src="/assets/settingsIcon.png" alt="" />
          <p>1</p>
        </div>
        <div className="_grey-box-wrapper">
          <img src="/assets/truckIcon.png" alt="" />
          <p>1</p>
        </div>

        <div className="_box-wrapper _box-wrapper2">
          <p className="_firstChild">Skader registrert</p>
        </div>
        <div className="_grey-box-wrapper _box-center">
          <img src="/assets/downloadIcon.png" alt="" />
        </div>

        <div className="_grey-box-wrapper _box-center">
          <img src="/assets/truckIcon.png" alt="" />
        </div>
      </div>

      <div className="_content-wrapper">
        <CommonButton imgPath="/assets/calendarIcon-white.png" />
        <CommonButton imgPath="/assets/icons8-tick-30.png" />
        <CommonButton btnText="Be om tilbud" />
      </div>

      <div className="_content-details">
        <p>Vis data fra Autosys</p>
        <div className="_content-childs">
          <div>
            <p>Icon 1</p>
            <img src="/assets/editIcon.png" alt="" />
          </div>
          <p>Frakbestilling ikke mulig pga aktiv fraktordre</p>
        </div>
      </div>

      <div className="_commonBtn">
        <Button className="_check-button _check-button-green">
          <img
            src="/assets/icons8-tick-30.png"
            alt=""
            className="checkIcon-image"
          />
        </Button>
      </div>

      <div className="_wrapper-box-info">
        <p>Agentens egne biler (demobiler, leiebiler, bruktbiler)</p>
      </div>
    </div>
  );
};

export default UserCrud;
