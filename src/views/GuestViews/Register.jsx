import { useRef, useState } from "react";
import Lab from "../../../src/assets/NewLab4.png";
import GoogleIcon from "../../../src/assets/google.png";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

export default function Register() {
    const [errors, setErrors] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const passwordConfirmRef = useRef();

    
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        navigate("/userhome");
    };

    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${Lab})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                    filter: "blur(5px)",
                }}
            ></div>
            <div style={{ position: "relative", zIndex: 1 }}>
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 mx-auto my-auto">
                                {errors && (
                                    <div
                                        className="alert1 ps-5 pt-3"
                                        style={{
                                            padding: "2px 4px",
                                            backgroundColor: "#ff4040",
                                            color: "white",
                                            borderRadius: "0.5rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <p>{errors}</p>
                                    </div>
                                )}
                                <div className="card">
                                    <div className="card-header border-1 shadow">
                                        <h4 style={{ color: "#447" }}>Register Form</h4>
                                    </div>
                                    <div className="card-body">
                                        <form method="POST" onSubmit={handleRegister}>
                                            <div className="w-100 d-flex justify-content-center">
                                                <button
                                                id="Registerwithgoogle"
                                                    className="mb-3 btn btn-white p-2 Registerwithgoogle"
                                                    style={{
                                                        border: "1px solid #ddd",
                                                        width: "100%",
                                                        borderRadius: "10px",
                                                    }}
                                                >
                                                    Register With Google
                                                    <img
                                                        src={GoogleIcon}
                                                        alt=""
                                                        width={"25px"}
                                                        height={"25px"}
                                                        className="ms-1"
                                                    />
                                                </button>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Full Name</label>
                                                <input
                                                    name="name"
                                                    ref={nameRef}
                                                    type="tesxt"
                                                    className="form-control"
                                                    aria-describedby="nameHelp"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email address</label>
                                                <input
                                                    name="email"
                                                    ref={emailRef}
                                                    type="email"
                                                    className="form-control"
                                                    aria-describedby="emailHelp"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input
                                                    name="password"
                                                    ref={passwordRef}
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Confirm Password</label>
                                                <input
                                                    name="password_confirmation"
                                                    ref={passwordConfirmRef}
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            <button
                                                name="Register-btn"
                                                type="submit"
                                                className="btn btn-secondary"
                                            >
                                                Register
                                            </button>
                                            <div className="mt-3">
                                                <p>
                                                    {"Already Have an account? "}
                                                    <Link
                                                        to="/login"
                                                        className="text-decoration-none text-primary"
                                                    >
                                                        Login here
                                                    </Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
