import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@carbon/react';
import { launchAddNewPackageWorkspace } from '../new-package-utills';

const NewPackageActionButton: React.FC = () => {
  const { t } = useTranslation();

  const handleAddNewPackageWorkspace = useCallback(() => {
    launchAddNewPackageWorkspace(t);
  }, [t]);

  return (
    <Button onClick={handleAddNewPackageWorkspace} size="md" kind="primary">
      {t('newpackage', 'New Package')}
    </Button>
  );
};

export default NewPackageActionButton;
