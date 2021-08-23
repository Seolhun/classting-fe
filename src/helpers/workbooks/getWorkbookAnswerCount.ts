import { WorkbookModel } from '@/models';

function getWorkbookAnswerCount(workbook: WorkbookModel) {
  return workbook.results.reduce((count, result) => {
    if (result.chosenAnswer === result.correct_answer) {
      return count + 1;
    }
    return count;
  }, 0);
}

export { getWorkbookAnswerCount };
export default getWorkbookAnswerCount;
