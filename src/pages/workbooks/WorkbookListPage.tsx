import React from 'react';

import { workbookDB } from '@/indexDB';
import { usePageState } from '@/hooks';
import { Meta, OverlayLoader } from '@/components';
import { useRecoilState } from 'recoil';
import { workbookListState } from '@/stores';
import { WorkbookList } from '@/containers';

const WorkbookListPage = () => {
  const [workbooks, setWorkbookList] = useRecoilState(workbookListState);
  const { loading, setLoading } = usePageState();

  React.useEffect(() => {
    (async () => {
      const storedWorkbookList = await workbookDB.workbooks.toArray();
      setWorkbookList(storedWorkbookList ?? []);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Meta title={'Your Workbooks'} />
      <OverlayLoader loading={loading}>
        <WorkbookList workbooks={workbooks} />
      </OverlayLoader>
    </>
  );
};

export default WorkbookListPage;
