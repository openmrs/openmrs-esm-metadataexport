import React from 'react';
import { PageHeader, PageHeaderContent, StockManagementPictogram } from '@openmrs/esm-framework';
import styles from './metadata-export-header.scss';

export const MetaDataExportHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <PageHeader className={styles.header} data-testid="stock-management-header">
      <PageHeaderContent illustration={<StockManagementPictogram />} title={title} />
    </PageHeader>
  );
};
