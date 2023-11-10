import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWapper>
      <ul>
        <li className={location.pathname === "/drops" ? "active" : ""}>
          <Link to="/drops">드롭스</Link>
        </li>
        <li className={location.pathname === "/marketplace" ? "active" : ""}>
          <Link to="/marketplace">마켓플레이스</Link>
        </li>
        <li className={location.pathname === "/trend" ? "active" : ""}>
          <Link to="/trend">트렌드</Link>
        </li>
        <li className={location.pathname === "/mypage" ? "active" : ""}>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  ul {
    display: flex;
    li {
      position: relative;
      margin-left: 3px;
      &::after {
        opacity: 0;
        transition: opacity 1s;
      }
      &.active {
        a {
          color: #000;
          svg {
            color: #000;
          }
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 80px;
        padding: 0 20px;
        color: #ccc;
        font-weight: 500;
        &:hover {
          color: #333;
        }
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

export default Gnb;
