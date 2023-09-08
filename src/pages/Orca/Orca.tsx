import React from 'react';
import './styles/orca.styles.scss';
type Props = {};

const Orca = (props: Props) => {
  return (
    <div className='orca'>
      <div className='orca-what-background'>
        <div className='orca-what'>
          <div className='orca-what-box'>
            <div className='orca-what-box-head'>What is the ORCA Group?</div>
            <div className='orca-what-box-about'>About ORCA /ˈɔːr.kə/</div>
            <div className='orca-what-box-body'>
              The ORCA (Optimized Research in Clinical AI) Group at BeamWorks is
              a collaborative team of AI specialists and clinical researchers,
              focused on healthcare applications.
            </div>
          </div>
        </div>
      </div>
      <div className='orca-goal'>
        <div className='orca-goal-box'>
          <div className='orca-goal-box-head'>Goal of the ORCA Group</div>
          <div className='orca-goal-box-body1'>
            We develop and validate cutting-edge AI technologies, and we
            facilitate effective communication between healthcare providers and
            patients.
          </div>
          <div className='orca-goal-box-body2'>
            Our optimized AI empowers healthcare professionals, leading to more
            accurate diagnoses and personalized treatment plans, ultimately
            improving patient outcomes.
          </div>
        </div>
      </div>
      <div className='orca-benefits'>
        <div className='orca-benefits-box'>
          <div className='orca-benefits-box-head'>ORCA Group Benefits</div>
          <div className='orca-benefits-box-body1'>
            <div className='orca-benefits-box-body1-square'></div>
            <div className='orca-benefits-box-body1-head'>
              Interdisciplinary Collaboration:
            </div>
            <div className='orca-benefits-box-body1-body'>
              We foster collaboration between AI specialists and clinical
              researchers, driving advancements in healthcare.
            </div>
          </div>
          <div className='orca-benefits-box-body2'>
            <div className='orca-benefits-box-body2-square'></div>
            <div className='orca-benefits-box-body2-head'>
              Opportunities for Inbound Clinical Trials:
            </div>
            <div className='orca-benefits-box-body2-body'>
              We offer research opportunities to participate in clinical trials,
              contributing to cutting-edge AI research.
            </div>
          </div>
          <div className='orca-benefits-box-body3'>
            <div className='orca-benefits-box-body3-square'></div>
            <div className='orca-benefits-box-body3-head'>
              Regular Symposia and Newsletters with Timely Updates:
            </div>
            <div className='orca-benefits-box-body3-body'>
              We host regular symposia, facilitating dynamic collaboration
              between AI specialists and clinical researchers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orca;
