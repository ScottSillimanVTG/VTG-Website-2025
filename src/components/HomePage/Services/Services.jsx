'use client';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Services.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from '@/hooks/useWindowSize';

const services = [
  'Business Process Design',
  'Marketing Strategy',
  'Marketing Operations Consulting',
  'Revenue Operations Consulting',
  'Technology Architecture Roadmapping',
  'Integration',
  'Implementation',
  'Audits',
  'Ongoing Support',
  'Data Migration',
  'Software Customization',
];

// Split the array into chunks of 6 items each
const chunkArray = arr => {
  const result = [];
  for (let i = 0; i < arr.length; i += 6) {
    result.push(arr.slice(i, i + 6));
  }
  return result;
};

export default function Services() {
  const { isMobile } = useWindowSize();
  const serviceChunks = chunkArray(services);

  return (
    <Wrapper classNames={styles.container}>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.servicesWrapper}>
        {isMobile
          ? services.map(service => (
              <div key={service} className={styles.service}>
                <FontAwesomeIcon icon={faPlus} />
                <p>{service}</p>
              </div>
            ))
          : serviceChunks.map((chunk, index) => (
              <div key={`service-${index}`} className={styles.column}>
                {chunk.map(service => (
                  <div key={service} className={styles.service}>
                    <FontAwesomeIcon icon={faPlus} />
                    <p>{service}</p>
                  </div>
                ))}
              </div>
            ))}
      </div>
    </Wrapper>
  );
}
