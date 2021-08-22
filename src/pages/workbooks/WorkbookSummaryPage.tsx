import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import classnames from 'classnames';

import { workbookState } from '@/stores';
import { usePageState } from '@/hooks';
import { workbookDB } from '@/indexDB';
import { BreadCrumb, Meta, OverlayLoader } from '@/components';
import { WorkbookSummary } from '@/containers';

interface PathParam {
  workbookID: string;
}

const WorkbookSummaryPage: React.FC = () => {
  const { workbookID } = useParams<PathParam>();
  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { loading, setLoading } = usePageState();

  React.useEffect(() => {
    (async () => {
      const storedWorkbook = await workbookDB.getWorkbookById(
        Number(workbookID),
      );
      if (storedWorkbook) {
        setWorkbook(storedWorkbook);
      }
      setLoading(false);
    })();
  }, [workbookID]);

  return (
    <>
      <Meta title={`Workbook Summary ${workbookID} `} />
      <section>
        <BreadCrumb
          items={[
            {
              href: '/workbooks',
              name: 'Workbooks',
            },
            {
              href: `/workbooks/${workbook.id}`,
              name: workbook?.id > 0 ? `${workbook.id}` : '',
            },
            {
              href: `/workbooks/${workbook.id}/summary`,
              name: workbook?.id > 0 ? `Summary` : '',
            },
          ]}
        />
      </section>
      <section className={classnames('mt-4')}>
        <OverlayLoader loading={loading}>
          <WorkbookSummary workbook={workbook} />
        </OverlayLoader>
      </section>
    </>
  );
};

export default WorkbookSummaryPage;
