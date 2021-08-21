import Dexie from 'dexie';
import dayjs from 'dayjs';

import { WorkbookModel } from '@/models';

class WorkbookDatabase extends Dexie {
  workbooks: Dexie.Table<WorkbookModel, number>;

  constructor() {
    super('WorkbookDatabase');
    this.version(1).stores({
      workbooks: '++id, name, response_code, *results, startDate, endDate',
    });
    this.workbooks = this.table('workbooks');
  }

  async getByID(id: number) {
    return await workbookDB.workbooks.get(id);
  }

  async put(item: WorkbookModel) {
    return await workbookDB.workbooks.put(item);
  }

  async startByID(id: number) {
    const item = await this.getByID(id);
    if (!item) {
      return null;
    }
    if (!item.startDate) {
      item.startDate = dayjs.tz(new Date()).format();
      console.log(item.startDate);
      await workbookDB.workbooks.put(item);
    }
    return item;
  }
}

const workbookDB = new WorkbookDatabase();
export { workbookDB };
export default workbookDB;
