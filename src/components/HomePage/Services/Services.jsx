'use client';
import Wrapper from '@/components/shared/Wrapper/Wrapper';
import styles from './Services.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Business Process',
    items: [
      'Business Process Design',
      'Marketing Strategy',
      'Marketing Operations Consulting',
      'Revenue Operations Consulting',
      'Change Management',
    ],
  },
  {
    title: 'Technology Implementation',
    items: [
      'RevTech Implementation',
      'System Integrations',
      'Audits',
      'Data Migration',
      'Ongoing Expertise',
    ],
  },
];

export default function Services() {
  return (
    <div id="services">
      <Wrapper classNames={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <div className={styles.servicesWrapper}>
          {services.map(serviceCategory => (
            <div key={serviceCategory.title}>
              <h3 className={styles.categoryTitle}>{serviceCategory.title}</h3>
              {serviceCategory.items.map(service => (
                <div key={service} className={styles.service}>
                  <FontAwesomeIcon icon={faPlus} />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
