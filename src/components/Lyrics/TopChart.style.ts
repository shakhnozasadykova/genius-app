import styled from "styled-components";

export const TopChartStyle = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-family: Programme, Arial, sans-serif;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .song-container {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    flex-direction: row;
  }

  .Card {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    gap: 60px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

  .Card img {
    max-width: 150px;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .Card h3 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
  }

  .Card p {
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
  }
`;