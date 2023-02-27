import { BigInt } from "@graphprotocol/graph-ts";
import {
  ReportPost as ReportPostEvent,
  ReportComment as ReportCommentEvent,
  ReportReply as ReportReplyEvent
} from "../generated/reports/reports";
import {
  User,
  Post,
  Group,
  Comment,
  Reply,
  Poll,
  Vote
} from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleReportPost(event: ReportPostEvent): void {
  let entity = Post.load(event.params.id.toString());
  if (entity) {
    if (event.params.report) entity.numberOfReports++;
    else entity.numberOfReports--;
    entity.save();
  }
}

export function handleReportComment(event: ReportCommentEvent): void {
  let entity = Comment.load(event.params.id.toString());
  if (entity) {
    if (event.params.report) entity.numberOfReports++;
    else entity.numberOfReports--;
    entity.save();
  }
}

export function handleReportReply(event: ReportReplyEvent): void {
  let entity = Reply.load(event.params.id.toString());
  if (entity) {
    if (event.params.report) entity.numberOfReports++;
    else entity.numberOfReports--;
    entity.save();
  }
}
