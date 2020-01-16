import React from 'react';
import Typing from 'react-typing-animation';
import { motion } from "framer-motion";


export default function MainPicture() {
  return (
    <div style={{ height: '45rem' }}>
      <div style={{ float: 'left', marginTop: '5%', marginLeft: '7%' }}>
        <div>
          <Typing >
            <h2 style={{ fontSize: '1.8em', marginTop: '7%' }}>   Get answers with surveys!  </h2>
          </Typing>
        </div>
        <div >
          <motion.div style={{ marginTop: '2%', fontSize: '1.2em' }} initial={{ x: 0 }} animate={{
            y: 120,
            float: 'left'
          }} transition={{ duration: 1.2 }}>
            <span>
              SurveyPal provides modern solutions
          </span>
          </motion.div>
          <br />
          <motion.div style={{ marginTop: '2%', fontSize: '1.2em' }} initial={{ x: 0 }} animate={{
            y: 120,
            float: 'left'
          }} transition={{ duration: 1.2 }}>
            <span>
              to population data collection and analysis.
          </span>
          </motion.div>
          {/* <br />
          <motion.div style={{ marginTop: '2%', fontSize: '1.2em' }} initial={{ x: 0 }} animate={{
            y: 120,
            float: 'left'
          }} transition={{ duration: 1.2 }}>
            <span>
              fresh perspectives.
          </span>
          </motion.div> */}

        </div>
      </div>
      <div style={{ width: '50%', height: '30%', marginTop: '1%', float: 'right' }}>
        <motion.div initial={{ x: 0 }} animate={{ x: -100 }} transition={{ duration: 1.2 }} style={{ marginRight: '0px' }}>

          <img src={'https://survey-pal.s3.ca-central-1.amazonaws.com/Asset+5.png'} style={{ width: '100%', height: '60%', float: 'right' }} />

        </motion.div>
      </div>
    </div>
  )
}