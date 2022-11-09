import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <div>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.heading}>
            Home
          </Link>
          <Link to="/codechef" className={styles.heading}>
            CodeChef
          </Link>
          <Link to="/codeforce" className={styles.heading}>
            CodeForces
          </Link>
          <Link to="/leetcode" className={styles.heading}>
            LeetCode
          </Link>
          {/* <h3 className={styles.heading}>Admin</h3>
            <Link to="/upload/contest" className={styles.linkTextButton}>
              <button className={styles.uploadContestButton}>
                Upload Contest
              </button>
            </Link> */}
        </nav>
        {/* <Link to='/' className={styles.logoutButtonLink}>
            <button
              className={`${styles.uploadContestButton} ${styles.logoutButton}`}             
            >
              Log out
            </button>
          </Link> */}
      </div>
    </React.Fragment>
  );
}

export default NavBar;
