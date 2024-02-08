import styled from "styled-components";

export const SignInStyle = styled.div`
  background-color: #000;
  box-sizing: border-box;
  color: #ccc;
  font-family: sans-serif;
  font-size: 15px;
  line-height: 140%;
  padding-bottom: 68px;
  position: relative;
  min-height: 100vh;

  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  
  .Header {
    width: 100%;
    top: 0;
    position: relative;
  }

  
  .HeaderPrimary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: #ffff64;
    box-sizing: initial;
    height: 41px;
    overflow: visible;
    position: relative;
    width: 100%;
  }

  .Search {
    font-feature-settings: "ss07","ss08","ss11","ss12","ss14","ss15","ss16","ss18","ss19","ss20","ss21";
    background: 0 0;
    font-family: Programme,Arial,sans-serif;
    font-size: 1rem;
    outline: 0;
    font-weight: 400;
    border: 0;
    padding: 0.4rem 2rem 0.3rem 0.5rem;
    position: relative;
    text-overflow: ellipsis;
  }

  .Logo {
    max-width: 100%; 
    max-height: 100%; 
    height: auto;
    margin: 0 auto;
  }

  .HeaderMenu {
    justify-content: center;
    width: 100%;
    background-color: #000;
    text-transform: uppercase;
    font-family: Programme,Arial,sans-serif;
    text-align: center;
    
  }

  ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .MenuItem {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    z-index: 3;
    display: inline-block;
    position: relative;
    padding: 0 1rem;
    color: #fff;
  }

  .MenuItem span {
    margin-left: 2rem; 
  }

  .loginUnit {
    padding: 20px 400px 50px;
  }






`;
