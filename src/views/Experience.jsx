import React, { useContext } from 'react';
import './Experience.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ThemeContext } from '../themeProvider';
import { MdGroupWork } from 'react-icons/md';
import { data } from '../constants.js';

const WorkExperience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="resume"
      className={darkMode === true ? 'bg-white-900' : 'bg-gray-900'}
    >
      <h1
        className={
          darkMode
            ? 'text-5xl font-bold px-4 md:px-0 text-center'
            : 'text-5xl font-bold px-4 md:px-0 text-center text-white'
        }
      >
        My Resume
      </h1>

      <div className="timeline">
        <div className="timeline_experience">
          <h3
            className={
              darkMode
                ? 'text-3xl font-semibold px-4 md:px-0 text-center text-blue-500'
                : 'text-3xl font-semibold px-4 md:px-0 text-center text-blue-500'
            }
          >
            Experience
          </h3>
          <VerticalTimeline layout="1-column" lineColor="purple">
            {data.experience.map((item, index) => (
              <VerticalTimelineElement
                key={item.companyName}
                contentStyle={
                  darkMode
                    ? { backgroundColor: '#4a0c78f2' }
                    : { backgroundColor: '#fbf4f4' }
                }
                className={
                  darkMode
                    ? 'mt-4 text-xl text-justify text-gray-500'
                    : 'mt-4 text-xl text-justify text-white-500'
                }
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date={item.year}
                dateClassName={darkMode ? 'date-class' : 'date-class-dark'}
                iconStyle={{ backgroundColor: 'rgb(69 81 221', color: '#fff' }}
                icon={<MdGroupWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title font-bold underline">
                    {item.companyName}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.position}
                  </h4>
                </div>

                <div className="row">
                  {item.techSkills.map((tec, index) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                      key={index}
                    >
                      <div className="tech-skills">
                        <p>{tec.techName}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p>{item.des}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="timeline_education">
          <h3
            className={
              darkMode
                ? 'text-3xl font-semibold px-4 md:px-0 text-center text-blue-500'
                : 'text-3xl font-semibold px-4 md:px-0 text-center text-blue-500'
            }
          >
            Education
          </h3>

          <VerticalTimeline layout="1-column" lineColor="purple">
            {data.education.map((item, index) => (
              <VerticalTimelineElement
                key={item.index}
                contentStyle={
                  darkMode
                    ? { backgroundColor: '#062ded7a' }
                    : { backgroundColor: '#fbf4f4' }
                }
                className={
                  darkMode
                    ? 'mt-4 text-xl text-justify text-gray-500'
                    : 'mt-4 text-xl text-justify text-white-500'
                }
                contentArrowStyle={{
                  borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date={item.year}
                dateClassName={darkMode ? 'date-class' : 'date-class-dark'}
                iconStyle={{ backgroundColor: 'rgb(69 81 221', color: '#fff' }}
                icon={<MdGroupWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title font-bold underline">
                    {item.name}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.degree}
                  </h4>
                </div>

                <p>{item.des}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
