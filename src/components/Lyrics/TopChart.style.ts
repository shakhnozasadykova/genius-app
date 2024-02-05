import styled from "styled-components";

export const TopChartStyle = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  .song-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }

  .song-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .song-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  .song-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .artist {
    font-size: 14px;
    color: #777;
  }
`;




