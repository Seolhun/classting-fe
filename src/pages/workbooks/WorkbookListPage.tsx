import React from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import { workbookDB } from '@/indexDB';
import { usePageState } from '@/hooks';
import { BreadCrumb, Card, Meta, OverlayLoader } from '@/components';
import { useRecoilState } from 'recoil';
import { workbookListState } from '@/stores';
import { WorkbookModel } from '@/models';
import { Workbook } from '@/containers';

const WorkbookListPage: React.FC = () => {
  const history = useHistory();

  const [workbooks, setWorkbookList] = useRecoilState(workbookListState);
  const { loading, setLoading } = usePageState();

  React.useEffect(() => {
    (async () => {
      const storedWorkbookList = await workbookDB.getWorkbooks();
      setWorkbookList(storedWorkbookList ?? []);
      setLoading(false);
    })();
  }, []);

  const gotoWorkbook = React.useCallback(
    (workbook: WorkbookModel) => () => {
      if (workbook.endedAt) {
        return history.push(`/workbooks/${workbook.id}/summary`);
      }
      history.push(`/workbooks/${workbook.id}`);
    },
    [],
  );

  return (
    <>
      <Meta title={'Your Workbooks'} />
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
      <OverlayLoader loading={loading}>
        <section className={classnames('grid grid-cols-2 gap-4', 'mt-4')}>
          {workbooks.map((workbook, i) => (
            <Card
              key={i}
              className="cursor-pointer"
              onClick={gotoWorkbook(workbook)}
            >
              <Workbook workbook={workbook} />
            </Card>
          ))}
        </section>
      </OverlayLoader>
    </>
  );
};

export default WorkbookListPage;
