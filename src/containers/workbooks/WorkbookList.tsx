import React from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import { WorkbookModel } from '@/models';
import { BreadCrumb } from '@/components';

import Workbook from './Workbook';

export interface WorkbookListProps {
  workbooks: WorkbookModel[];
}

const WorkbookList: React.FC<WorkbookListProps> = ({ workbooks }) => {
  const history = useHistory();

  const gotoWorkbook = React.useCallback(
    (workbook: WorkbookModel) => () => {
      history.push(`/workbooks/${workbook.id}`);
    },
    [],
  );

  return (
    <div>
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
      <section
        className={classnames(
          'grid grid-cols-2 gap-4',
          'sm:grid-cols-3',
          'mt-8',
        )}
      >
        {workbooks.map((workbook, i) => (
          <div
            key={i}
            className="cursor-pointer"
            onClick={gotoWorkbook(workbook)}
          >
            <Workbook workbook={workbook} />
          </div>
        ))}
      </section>
    </div>
  );
};

export { WorkbookList };
export default WorkbookList;
