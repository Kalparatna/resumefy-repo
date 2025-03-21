import React, { forwardRef, useEffect, useRef, useState } from "react";
import DefaultTemplate from "./Templates/DefaultTemplate/DefaultTemplate";
import styles from "./Resume.module.css";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";
import Template1 from "./Templates/Template1/Template1";
import Template2 from "./Templates/Template2/Template2";
import Template3 from "./Templates/Template3/Template3";
import Template4 from "./Templates/Template4/Template4";
import Template5 from "./Templates/Template5/Template5";
import Template6 from "./Templates/Template6/Template6";
import Template7 from "./Templates/Template7/Template7";
import Template8 from "./Templates/Template8/Template8";
import Template9 from "./Templates/Template9/Template9";
import Template10 from "./Templates/Template10/Template10";
import Template11 from "./Templates/Template11/Template11";
import Template12 from "./Templates/Template12/Template12";
import Template13 from "./Templates/Template13/Template13";
import Template14 from "./Templates/Template14/Template14";
import Template15 from "./Templates/Template15/Template15";
import Template16 from "./Templates/Template16/Template16";
import Template17 from "./Templates/Template17/Template17";
import Template18 from "./Templates/Template18/Template18";
import Template19 from "./Templates/Template19/Template19";
import Template20 from "./Templates/Template20/Template20";
import Template21 from "./Templates/Template21/Template21";
import Template22 from "./Templates/Template22/Template22";
import Template23 from "./Templates/Template23/Template23";
import Template24 from "./Templates/Template24/Template24";
import Template25 from "./Templates/Template25/Template25";
import Template26 from "./Templates/Template26/Template26";
import Template27 from "./Templates/Template27/Template27";
import Template28 from "./Templates/Template28/Template28";
import Template29 from "./Templates/Template29/Template29";
import Template30 from "./Templates/Template30/Template30";
import Template31 from "./Templates/Template31/Template31";
import Template32 from "./Templates/Template32/Template32";
import Template33 from "./Templates/Template33/Template33";
import Template34 from "./Templates/Template34/Template34";
import Template35 from "./Templates/Template35/Template35";
import Template36 from "./Templates/Template36/Template36";
import Template37 from "./Templates/Template37/Template37";
import Template44 from "./Templates/Template44/Template44"; 
import Template45 from "./Templates/Template45/Template45";

const Resume = forwardRef((props, ref) => {
  const { information, sections, activeColor, templateId } = props;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    skills: information[sections.skills],
    languages: information[sections.languages],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>Some college name</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.skills]: (
      <div
        className={`${styles.section} ${
          info.skills?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.skills?.sectionTitle}</div>
        <div className={styles.content}>
          {info.skills?.points?.map((skill, index) => (
            <li key={index} className={styles.point}>
              {skill}
            </li>
          ))}
        </div>
      </div>
    ),
    [sections.languages]: (
      <div
        className={`${styles.section} ${
          info.languages?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.languages?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.languages?.points?.map((language, index) => (
            <li key={index} className={styles.point}>
              {language}
            </li>
          ))}
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [
        sections.project,
        sections.education,
        sections.summary,
        sections.skills,
        sections.languages,
      ],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!activeColor || !container) return;

    container.style.setProperty("--color", activeColor);
  }, [activeColor]);
  const getTemplateLayout = () => {
    switch (templateId) {
      case 1:
        return (
          <Template1
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 2:
        return (
          <Template2
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 3:
        return (
          <DefaultTemplate
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
            columns={columns}
            sectionDiv={sectionDiv}
          />
        );
      case 4:
        return (
          <Template4
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
            columns={columns}
            sectionDiv={sectionDiv}
          />
        );
      case 5:
        return (
          <Template5
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
            columns={columns}
            sectionDiv={sectionDiv}
          />
        );
      case 6:
        return (
          <Template6
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
            columns={columns}
            sectionDiv={sectionDiv}
          />
        );
      case 7:
        return (
          <Template7
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 8:
        return (
          <Template8
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 9:
        return (
          <Template9
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 10:
        return (
          <Template10
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 11:
        return (
          <Template11
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 12:
        return (
          <Template12
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 13:
        return (
          <Template13
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 14:
        return (
          <Template14
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 15:
        return (
          <Template15
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 16:
        return (
          <Template16
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 17:
        return (
          <Template17
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 18:
        return (
          <Template18
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 19:
        return (
          <Template19
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 20:
        return (
          <Template20
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 21:
        return (
          <Template21
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 22:
        return (
          <Template22
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 23:
        return (
          <Template23
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 24:
        return (
          <Template24
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 25:
        return (
          <Template25
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 26:
        return (
          <Template26
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 27:
        return (
          <Template27
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 28:
        return (
          <Template28
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 29:
        return (
          <Template29
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 30:
        return (
          <Template30
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 31:
        return (
          <Template31
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 32:
        return (
          <Template32
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 33:
        return (
          <Template33
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 34:
        return (
          <Template34
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 35:
        return (
          <Template35
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 36:
        return (
          <Template36
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
      case 37:
        return (
          <Template37
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
          />
        );
        case 44:
          return (
            <Template44
              ref={ref}
              information={information}
              sections={sections}
              activeColor={activeColor}
            />
          );
          case 45:
            return (
              <Template45
                ref={ref}
                information={information}
                sections={sections}
                activeColor={activeColor}
              />
            );
      default:
        return (
          <DefaultTemplate
            ref={ref}
            information={information}
            sections={sections}
            activeColor={activeColor}
            columns={columns}
            sectionDiv={sectionDiv}
          />
        );
    }
  };

  return <>{getTemplateLayout()}</>;
});

export default Resume;


