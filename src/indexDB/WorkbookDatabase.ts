import Dexie from 'dexie';
import dayjs from 'dayjs';

import { WorkbookModel } from '@/models';

class WorkbookDatabase extends Dexie {
  private workbooks: Dexie.Table<WorkbookModel, number>;

  constructor() {
    super('WorkbookDatabase');
    this.version(1).stores({
      workbooks:
        '++id, name, response_code, *results, startedAt, endedAt, createdAt, updatedAt, deletedAt',
    });
    this.workbooks = this.table('workbooks');
  }

  async addWorkbook(workbook: WorkbookModel) {
    const id = await workbookDB.workbooks.add({
      ...workbook,
      name: workbook.name,
    });
    return id;
  }

  async getWorkbookById(id: number) {
    return await workbookDB.workbooks.get(id);
  }

  async updateWorkbook(workbook: WorkbookModel) {
    return await workbookDB.workbooks.put(workbook);
  }

  async startWorkbookByID(id: number) {
    const item = await this.getWorkbookById(id);
    if (!item) {
      return null;
    }
    if (!item.startedAt) {
      item.startedAt = dayjs.tz(new Date()).format();
      await this.updateWorkbook(item);
    }
    return item;
  }

  async finishWorkbook(id: number) {
    const item = await this.getWorkbookById(id);
    if (!item) {
      return null;
    }
    if (!item.endedAt) {
      item.endedAt = dayjs.tz(new Date()).format();
      await this.updateWorkbook(item);
    }
    return item;
  }
}

const workbookDB = new WorkbookDatabase();
export { workbookDB };
export default workbookDB;
