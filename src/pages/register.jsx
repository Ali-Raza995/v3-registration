import Header from "../components/common/header";
import CarDetails from "../components/register/carDetails/carDetails";
import CarouseInfo from "../components/register/carouseInfo/carouseInfo";
import OrderSuccessMessage from "../components/register/orderSuccessMessage/orderSuccessMessage";
import UserContact from "../components/register/userContact/userContact";
import UserDetails from "../components/register/userDetails/userDetails";
import UserTable from "../components/register/userTable/userTable";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="_btn-parent">
          <Header />
        </div>
        <CarDetails />
      </div>
      <div className="container">
        <CarouseInfo />
      </div>
      <div className="container">
        <UserContact />
      </div>
      <div className="container">
        <UserTable />
      </div>
      <div className="container">
        <UserDetails />
      </div>
      <div className="container">
        <OrderSuccessMessage />
      </div>
    </>
  );
};

export default Register;
