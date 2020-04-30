import {State} from "../state/State";
import RemoteService from "./RemoteService";

class ReportService extends RemoteService {
  refreshReportForToday() {
    this.requestForPath('report/today', report => State.update({report: report}))
  }
}

export const reportService: ReportService = new ReportService();
reportService.refreshReportForToday();