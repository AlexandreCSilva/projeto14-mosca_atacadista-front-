import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reset from "../stylesheet/reset.js";
import PrivatePage from "./PrivatePage.js";
import { SignIn } from "./SignInPage.js";
import { HomePage } from "./HomePage.js";
import { SignUp } from "./SignUpPage.js";
import { Product } from "./Product.js";
import { Cart } from "./CartPage.js";
import { ProfilePage } from "./ProfilePage.js";
import { AddProductPage } from "./NewProductPage.js";
import UserContext from "../contexts/UserContext.js";
import { useState } from "react";
import { Confirm } from './ConfirmPage.js';

function App() {
  const [user, setUser] = useState({
    name: "",
    profilePictureURL: "",
    token: "",
  });

  return (
    <>
      <Reset />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/product/:productid" element={<Product />} />
            <Route path="/cart"
              element={
                <PrivatePage>
                  <Cart />
                </PrivatePage>
              } />
              <Route path="/confirm/:productid"
              element={
                <PrivatePage>
                  <Confirm />
                </PrivatePage>
              } />

              <Route path="/product/new" 
              element={
                <PrivatePage>
                  <AddProductPage />
                </PrivatePage>
              } />
              <Route
              path="/user"
              element={
                <PrivatePage>
                  <ProfilePage />
                </PrivatePage>
              }
              />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
