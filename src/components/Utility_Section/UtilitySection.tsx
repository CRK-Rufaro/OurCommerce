import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faQuestionCircle, faMapMarkerAlt, faShoppingCart, faStore } from '@fortawesome/free-solid-svg-icons';
import styles from './UtilitySection.module.scss';

interface UtilityItemProps {
  icon: JSX.Element;
  text: string;
}

const UtilityItem: React.FC<UtilityItemProps> = ({ icon, text }) => (
  <div className={styles.utilityItem}>
    {icon}
    <p>{text}</p>
  </div>
);

export const UtilitySection: React.FC = () => {
  return (
    <div className={styles.utilitySection}>
      <UtilityItem icon={<FontAwesomeIcon icon={faQuestionCircle} />} text="FAQ's" />
      <UtilityItem icon={<FontAwesomeIcon icon={faTruck} />} text="Delivery & Returns" />
      <UtilityItem icon={<FontAwesomeIcon icon={faMapMarkerAlt} />} text="Track My Order" />
      <UtilityItem icon={<FontAwesomeIcon icon={faStore} />} text="Stores Near Me" />
      <UtilityItem icon={<FontAwesomeIcon icon={faShoppingCart} />} text="How to Shop" />
    </div>
  );
};
