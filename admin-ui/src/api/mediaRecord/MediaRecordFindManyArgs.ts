import { MediaRecordWhereInput } from "./MediaRecordWhereInput";
import { MediaRecordOrderByInput } from "./MediaRecordOrderByInput";

export type MediaRecordFindManyArgs = {
  where?: MediaRecordWhereInput;
  orderBy?: MediaRecordOrderByInput;
  skip?: number;
  take?: number;
};
