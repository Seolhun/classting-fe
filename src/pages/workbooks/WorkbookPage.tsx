import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import classnames from 'classnames';

import { workbookDB } from '@/indexDB';
import { workbookState } from '@/stores';
import { WorkbookForm } from '@/containers';
import { BreadCrumb, Meta, OverlayLoader } from '@/components';
import { usePageState } from '@/hooks';

interface PathParam {
  workbookID: string;
}

const WorkbookPage = () => {
  const { workbookID } = useParams<PathParam>();
  const [workbook, setWorkbook] = useRecoilState(workbookState);
  const { loading, setLoading } = usePageState();

  React.useEffect(() => {
    (async () => {
      const storedWorkbook = await workbookDB.workbooks.get(Number(workbookID));
      if (storedWorkbook) {
        setWorkbook(storedWorkbook);
      }
      setLoading(false);
    })();
  }, [workbookID]);

  return (
    <>
      <Meta title={`Your Workbook ${workbookID}`} />
      <div className={classnames('max-w-screen-lg', 'mx-auto')}>
        <section>
          <BreadCrumb
            items={[
              {
                href: '/workbooks',
                name: 'Workbooks',
              },
            ]}
          />
        </section>
        <section className="mt-4">
          <OverlayLoader loading={loading}>
            <WorkbookForm workbook={workbook} />
          </OverlayLoader>
        </section>
      </div>
    </>
  );
};

export default WorkbookPage;
