import React from 'react';

export default function Article() {
  return (
    <div style={{ width: '100%', height: '35em', display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
      <div data-aos="fade-up" style={{ width: '50%', height: '70%', float: 'left', marginTop: '7%' }}>
        <img style={{ width: '70%', height: '80%' }} src={'https://survey-pal.s3.ca-central-1.amazonaws.com/8690978_web1_170927-SUL-homelesscount.jpg'} />
      </div>
      <div data-aos="fade-down" style={{ float: 'right', marginTop: '7%', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ margin: '0 auto', marginTop: '8%' }}>
          More than 100 seniors living <br />on Surrey streets: homeless count
            </h1>
        <a style={{ marginTop: '9%', color: 'blue', cursor: 'pointer' }}>Read More</a>
      </div>
    </div>
  )
}