import React from 'react'

import colors from '../../config/colors'

export default () => (
  <div className="container">
    <div className="content">
      <h2>Who we are</h2>
      <h3 className="bold">Founded in 2007</h3>
      <h3>
        Thien An Tutoring Centre is an ethnic school teaching English and Maths for Vietnamese students,
        especially the ones who migrates to Australia and need support to settle down to daily schools.
      </h3>
      <h3>Tutors are all volunteers and who are uni students, teachers, ex teachers</h3>
      <h3>Staff are all volunteers and who are parents, community members</h3>
    </div>

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx>{`
      .container {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background-color: ${colors.blue};
      }

      .content {
        max-width: 60rem;
        width: 100%;
        padding: 1rem;
      }

      h2 {
        font-size: 3rem;
        color: ${colors.yellow};
      }

      h3 {
        font-weight: 300;
        color: white;
      }

      .bold {
        font-weight: bold;
      }
    `}</style>
    {/* eslint-enable */}
  </div>
)
