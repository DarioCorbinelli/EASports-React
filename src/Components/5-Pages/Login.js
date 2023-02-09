import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import style from "../../SCSS/5-Pages/Form.module.scss";

const button1Variants = {
  rest: {
    scale: 1,
    backgroundColor: "#235fe3",
    boxShadow: "0 0 30px 0 rgba(31, 85, 202, 0)",
  },
  hover: {
    scale: 0.98,
    backgroundColor: "#1f55ca",
    boxShadow: "0 0 30px 0 rgba(31, 85, 202, 0.3)",
  },
};

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()
  const formRef = useRef(null);

  useEffect(() => {
    setEmail("")
    setPassword("")
    setError(false)
  }, []);

  function handleEmailInput(e) {
    setError(false)
    setEmail(e.target.value)
  }
  function handlePasswordInput(e) {
    setError(false)
    setPassword(e.target.value)
  }
  function handlePasswordBtn(e) {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  }

  async function handleUserLogin(e) {
    e.preventDefault()
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
      credentials: "include"
    })

    if (response.status === 200) {
      navigate("/account")
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Helmet>
        <title>Accedi - Area personale</title>
      </Helmet>
      <div className={style.page}>
        <div className={style.content}>
          <Link to="/" className={style.logo}>
            <img src="https://eaassets-a.akamaihd.net/resource_signin_ea_com/551.0.20230120.211.3ef4f9a/p/statics/juno/img/EALogo-New.svg" alt="Logo" />
          </Link>
          <>
            <h1>Accedi al tuo account EA</h1>
            <form ref={formRef} action="/">
              <label htmlFor="email">E-mail</label>
              <div className={style.input}>
                <input type="email" name="email" id="email" value={email} onChange={handleEmailInput} placeholder="Inserisci la tua e-mail" data-error={error} />
              </div>
              {error && <p className={style.error}>Email o password non corretti</p>}
              <label htmlFor="password">Password</label>
              <div className={style.input}>
                <input type={passwordVisible ? "text" : "password"} name="password" id="password" value={password} onChange={handlePasswordInput} placeholder="Inserisci la tua password" data-error={error}/>
                <motion.button whileHover={{ scale: 0.94, backgroundColor: "#141724", transition: { backgroundColor: { duration: 0 } } }} initial={{ scale: 1, backgroundColor: "#343647" }} onClick={handlePasswordBtn}>
                  {!passwordVisible ? (
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <path d="m0 0h16v16h-16z"></path>
                        <path
                          d="m8 3.66666667c3.2032732 0 6.6666667 2.54318984 6.6666667 4.33333333s-3.4633935 4.3333333-6.6666667 4.3333333c-3.20327316 0-6.66666667-2.54318981-6.66666667-4.3333333s3.46339351-4.33333333 6.66666667-4.33333333zm0 1.33333333c-1.38181706 0-2.74575629.50269607-3.87107038 1.3290207-.87134632.63983463-1.46226295 1.41228951-1.46226295 1.6709793s.59091663 1.03114467 1.46226295 1.6709793c1.12531409.8263246 2.48925332 1.3290207 3.87107038 1.3290207s2.7457563-.5026961 3.8710704-1.3290207c.8713463-.63983463 1.4622629-1.41228951 1.4622629-1.6709793s-.5909166-1.03114467-1.4622629-1.6709793c-1.1253141-.82632463-2.48925334-1.3290207-3.8710704-1.3290207zm0 1c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0 1.33333333c-.36818983 0-.66666667.29847684-.66666667.66666667s.29847684.66666667.66666667.66666667.66666667-.29847684.66666667-.66666667-.29847684-.66666667-.66666667-.66666667z"
                          fill="#fff"
                          ></path>
                      </g>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                      <g fill-rule="evenodd" fill="none">
                        <path d="M14.318 14.404a3 3 0 0 0-4.223-4.223l1.436 1.436a1 1 0 0 1 1.352 1.352l1.435 1.435zm-5.27-2.442a3 3 0 0 0 3.49 3.49l-3.49-3.49z" fill="#fff"></path>
                        <path
                          d="M17.484 17.57c.546-.294 1.05-.617 1.506-.951.875-.643 1.597-1.348 2.11-2.02a5.54 5.54 0 0 0 .628-1.01c.15-.323.272-.7.272-1.089s-.122-.766-.272-1.088A5.54 5.54 0 0 0 21.1 10.4c-.514-.67-1.235-1.376-2.11-2.019C17.245 7.1 14.793 6 12 6c-1.824 0-3.503.47-4.934 1.152L8.585 8.67A9.309 9.309 0 0 1 12 8c2.27 0 4.318.9 5.807 1.994.742.545 1.321 1.12 1.704 1.621.192.251.323.468.403.64.071.153.083.231.086.244v.001c-.003.014-.015.092-.086.245a3.57 3.57 0 0 1-.403.64c-.383.5-.962 1.076-1.704 1.622a10.73 10.73 0 0 1-1.812 1.073l1.489 1.49zM6.718 9.632a9.89 9.89 0 0 0-.525.362c-.742.545-1.321 1.12-1.704 1.621a3.57 3.57 0 0 0-.403.64c-.071.153-.083.231-.086.244v.001c.003.014.015.092.086.245.08.172.21.389.403.64.383.5.962 1.076 1.704 1.622C7.683 16.1 9.73 17 12 17a8.92 8.92 0 0 0 1.882-.204l1.626 1.627c-1.08.357-2.26.577-3.508.577-2.792 0-5.245-1.1-6.99-2.381-.875-.643-1.597-1.348-2.11-2.02a5.544 5.544 0 0 1-.628-1.01c-.15-.323-.272-.7-.272-1.089s.122-.766.272-1.088A5.61 5.61 0 0 1 2.9 10.4c.513-.67 1.235-1.376 2.11-2.019.087-.064.176-.127.267-.19l1.44 1.441z"
                          fill="#fff"
                          ></path>
                        <path d="M3.543 2.793a1 1 0 0 1 1.414 0l17 17a1 1 0 0 1-1.414 1.414l-17-17a1 1 0 0 1 0-1.414z" fill="#fff"></path>
                      </g>
                    </svg>
                  )}
                </motion.button>
              </div>
              {error && <p className={style.error}>Email o password non corretti</p>}
              <motion.button whileHover="hover" initial="rest" variants={button1Variants} type="submit" onClick={handleUserLogin} >
                ACCEDI
              </motion.button>
            </form>
            <p>
              {" "}
              Non hai un account? <button onClick={() => navigate("/register")}>Registrati</button>
            </p>
          </>
        </div>
      </div>
    </>
  );
}

export default Login;
