import React from 'react'

import colors from '../../config/colors'

export default () => (
  <div className="container">
    <div className="contentContainer">
      <div className="content">
        <h2>What we do</h2>

        <h3>We teach English and Maths</h3>
        <h3>Classes are held during school terms on Saturdays, from 2pm to 4pm.</h3>
        <h3>Classes are from year 1 level to year 10</h3>
        <br />
        <h3>No fees is charged, only $100 a year per student for learning materials </h3>
      </div>
    </div>

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .container {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .container::after {
        content: "";
        background: url(/static/book.jpeg);
        background-size: cover;
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .contentContainer {
        max-width: 60rem;
        width: 100%;
        margin: 0 auto;
      }

      .content {
        width: 100%;
        padding: 1rem;
      }

      h2 {
        font-size: 3rem;
        color: ${colors.blue};
      }

      h3 {
        font-weight: 400;
        color: ${colors.blue};
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
