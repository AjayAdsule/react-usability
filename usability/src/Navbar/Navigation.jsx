import React from "react";
import styled from "styled-components";
const Navigation = () => {
  const Nav = styled.nav``;
  return (
    <React.Fragment>
      <Nav className="my-[20px] ">
        <div className="container h-[50px] flex">
          <div className="left w-[35%] ">
            <div className="company-logo w-[40%] h-[100%] ">
              <a href="/">
                <img
                  src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5dc9062fc19d430f6909ced7_UHLogo_standard.png"
                  alt="logo"
                  className="max-w-[130px] my-2 "
                />
              </a>
            </div>
          </div>
          <div className="right w-[60%]">
            <ul className="flex gap-x-[20px] justify-end my-[10px] xs:hidden lg:block lg:flex">
                <li className="hover:text-blue-500">Products</li>
                <li className="hover:text-blue-500">Customers</li>
                <li className="hover:text-blue-500">Pricing</li>
                <li className="hover:text-blue-500">Resource</li>
                <li className="hover:text-blue-500 "><a href="/">Sign In</a></li>
                <li className="hover:text-blue-500 "><a href="/">Login</a></li>
            </ul>
          </div>
        </div>
      </Nav>
    </React.Fragment>
  );
};

export default Navigation;
