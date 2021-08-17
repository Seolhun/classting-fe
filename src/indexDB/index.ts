import Dexie from 'dexie';

const indexDB = new Dexie('WorkbookDatabase');
indexDB.version(1).stores({
  workbooks: '++id, *results',
});

export { indexDB };
export default indexDB;
