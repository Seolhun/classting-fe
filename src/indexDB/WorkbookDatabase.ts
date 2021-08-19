import Dexie from 'dexie';

import { WorkbookModel } from '@/models';

class WorkbookDatabase extends Dexie {
  public workbooks: Dexie.Table<WorkbookModel, number>;

  public constructor() {
    super('WorkbookDatabase');
    this.version(1).stores({
      workbooks: '++id, *results',
    });
    this.workbooks = this.table('workbooks');
  }
}

const workbookDB = new WorkbookDatabase();
export { workbookDB };
export default workbookDB;
