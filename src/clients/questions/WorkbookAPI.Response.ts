import { WorkbookModel } from '@/models';

export interface GenerateWorkbookResponse {
  response_code: number;

  results: WorkbookModel[];
}
