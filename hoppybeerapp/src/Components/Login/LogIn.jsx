import React from "react";
import imglogin from '../../Resource/login.png';
import '../Login/login.css'

export const LogIn = () => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        class="modal fade formlogin"
        id="loginmodal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-4" id="staticBackdropLabel">
                Login User / Admin
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="imglogin">
              <img src={imglogin} alt="" />
            </div>

            {/* ------------BODY------------ */}
            <div class="modal-body">
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <br/>

                <label for="pass" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="pass"
                  placeholder="password"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modaladmin"
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
