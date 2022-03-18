import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";

const Policts = () => {
  dinamicTitle("terms & Conditions");
  return (
    <main className="politics" id="terms">
      <section className="private-politics">
        <i className="bi bi-exclamation-triangle-fill icon-politics"></i>
        <h1>Privacy policies</h1>
        <h3>
          The law requires you to have privacy policies if you collect data from
          visitors to your website. Customize the details of your policy in
          accordance with local laws and explain the process you are following
          for the protection of the data of your users.
        </h3>
        <p>
          Introduction Solidoct is committed to protecting the data it collects
          of its users. This policy describes the process of collecting, use and
          protection of the personal information I receive from visitors to my
          website. By entering my website you authorizes the use of cookies, as
          established in the terms of this policy.
        </p>
        <p>
          Data Collection Solidoct collects the minimum necessary of personally
          identifiable information to improve this website and the services that
          I offer. The data I collect includes all or any type of information
          that you enter when using my page website and/or my services.
        </p>
        <p>
          Use of information Solidoct may use personal information collected
          through this website for the purposes described in this policy.
          Personal information that is processed on this site will not be
          protected longer than necessary, under any circumstance. I will take
          the necessary measures to prevent the loss or misuse of your personal
          information (for example, encryption of data).
        </p>
      </section>

      <section className="terms">
        <i className="bi bi-pen-fill icon-politics"></i>
        <h1>Terms and conditions of use</h1>
        <h3>
          The following terms and conditions of use represent a contract between
          an individual user and Solidoct regarding the use of your website and
          the services you offer. Update these guidelines in accordance with
          your particular policies.
        </h3>
        <p>
          Introduction Please read these terms and conditions carefully. To the
          accessing my website or using my services, you acknowledge that
          understands, agrees and is bound by them.
        </p>
        <p>
          Modification of the terms and conditions When deemed necessary,
          Solidoct may edit, add or delete sections of this agreement. On If
          changes are made to these terms and conditions of use, I will make
          every reasonable effort to notify you.
        </p>
        <p>
          Prohibited Behaviors You will be solely responsible for your actions
          on this website, for which you agree to comply with all laws,
          contracts and intellectual property rights and third parties.
        </p>
        <p>
          Suspension Solidoct reserves the right to suspend access to this
          website or prevent you from using my services in future occasions in
          case of determining that the terms and conditions of use described
          here have been violated.
        </p>
      </section>

      <section className="red">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/Solidoct-100302629113445"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/solidoct/" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/c/51998999883" target="_blank">
              <i className="bi bi-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Policts;
