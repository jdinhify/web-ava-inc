import React from 'react'

import colors from '../../config/colors'

export default () => (
  <div className="container">
    <div className="contentContainer">
      <div className="content">
        <h2>Contact</h2>

        <h3>Thien An Tutoring Centre</h3>
        <h3>Principal - Marguirite Nguyen</h3>
        <h3>Assistant Principal - Thi Phan</h3>
        <h3>Secretary - Mai Nguyen</h3>
        <h3>Parents & Friends - Cuong Tran</h3>
        <h3>Address - 51 Mitchell St, Brunswick</h3>
        <h3>Tel:  9386 6522</h3>
        <h3>Mobile:  0438 933 923</h3>
        <h3>Email:  thienantutoringcentre@gmail.com</h3>
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
        background-color: ${colors.yellowLight};
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
        color: ${colors.blue};
        font-weight: 400;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
